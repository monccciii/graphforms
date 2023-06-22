import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'components/sidebar'
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from 'components/sidebar';
import Navbar from '@/components/navbar';
import { OpenAI } from "langchain/llms/openai";
import { StructuredOutputParser } from "langchain/output_parsers";
import { PromptTemplate } from "langchain/prompts"
import { LLMChain } from "langchain/chains"
import Papa from "papaparse";


export default function FormSettings() {
  const backendUrl: string = process.env.NEXT_PUBLIC_API_URL!;
  const router = useRouter();
  const { formsettings } = router.query;
  const [fetchedData, setFetchedData] = useState<any>(null);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [modal2Open, setModal2Open] = useState<boolean>(false);
  const [currSet, setCurrSet] = useState<number>(1);
  const [isFetched, setIsFetched] = useState<boolean>(false);
  const [visualizeInput, setVisualizeInput] = useState<string>('');
  const [username, setUsername] = useState<string | null>(null);

  async function fetchFormData() {
    let token = null
    if (typeof window !== 'undefined') {
        token = localStorage.getItem('token');
    }

    try {
      const response = await fetch(`${backendUrl}viewform`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: formsettings
        })
      });
      const data = await response.json();
      setFetchedData(data);
      console.log(data);
      toast.success('Form data fetched successfully!', {
        position: toast.POSITION.TOP_RIGHT
      });
    } catch (error) {
      console.error(error);
      toast.error('An error occurred while fetching form data. Please try again.', {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  }

  async function createCSV() {
    let token = null;
    if (typeof window !== "undefined") {
      token = localStorage.getItem("token");
    }
  
    try {
      const response = await fetch(`${backendUrl}createcsv`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: formsettings,
        }),
      });
  
      if (response.ok) {
        const csvContent = await response.text(); 
        const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8" });
        const url = URL.createObjectURL(blob);
  
        const link = document.createElement("a");
        link.href = url;
        link.download = "form_data.csv";
        document.body.appendChild(link);
        link.click();
  
        // Clean up
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
  
        toast.success("Exported CSV!", {
          position: toast.POSITION.TOP_RIGHT,
        });
      } else {
        console.error(response.status);
        toast.error("An error occurred while exporting the CSV. Please try again.", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while sending the request. Please try again.", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  }

  async function gptAnalyze(dataSample:any) {
    console.log(dataSample.data)
    const template = `
    Data Sample:
    \n{dataSample}

    Recommend some ways this data can be visualized. Specify the fields which will be visualized.
    `;
  
    const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;
    const prompt = new PromptTemplate({template: template, inputVariables: ["dataSample"]});
    const model = new OpenAI({ temperature: 0.5, openAIApiKey: apiKey });
  
    const chain = new LLMChain({ llm: model, prompt: prompt });
    const ans1 = await chain.call({dataSample: dataSample.data});
    console.log(ans1.text);
  }

  async function getCSVHeadAndAnalyze() {
    let token = null;
    if (typeof window !== "undefined") {
      token = localStorage.getItem("token");
    }
  
    try {
      const response = await fetch(`${backendUrl}createanalyzecsv`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: formsettings,
        }),
      });
  
      if (response.ok) {
        const csvContent = await response.text(); 
        const results = Papa.parse(csvContent, {
          header: true,
          dynamicTyping: true,
        });
        toast.success("Fetched CSV head!", {
          position: toast.POSITION.TOP_RIGHT,
        });
        try {gptAnalyze(results)} catch {
          toast.error("Failed to analyze data.", {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      } else {
        console.error(response.status);
        toast.error("An error occurred while fetching the CSV. Please try again.", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while sending the request. Please try again.", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  }

  async function deleteForm() {
    let token = null;
    if (typeof window !== "undefined") {
      token = localStorage.getItem("token");
    }
  
    try {
      const response = await fetch(`${backendUrl}deleteform`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: formsettings,
        }),
      });
  
      if (response.ok) {
        toast.success("Form deleted successfully!", {
          position: toast.POSITION.TOP_RIGHT,
        });
  
        // Navigate back to the forms list page (or wherever you want)
        router.push("/workspace");
      } else {
        console.error(response.status);
        toast.error("An error occurred while deleting the form. Please try again.", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while sending the request. Please try again.", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  }

  async function gptPredict(q:any, o:any) {
    const parser = StructuredOutputParser.fromNamesAndDescriptions({
      Visualization: "Method of visualization",
      Field1: "One of the two best fields to satisfy what the user would like to visualize",
      Field2: "The second of two best fields to satisfy what the user would like to visualize"
    });

    const formatInstructions = parser.getFormatInstructions();

    const template = `Question: \n{format_instructions}\n{question}\n
    This question is about how the user should visualize their data.
    They have a set of fields which could be visualized, which is listed.
    Using their question, return the best data visualization graphic, then
    pick the two best fields to visualize on it in order to satisfy the user's
    request.

    Here are all the visualization options:
    ['Violin', 'Density', 'Histogram', 'Boxplot', 'Ridgeline', 'Scatter', 'Heatmap', 'Correlogram', 'Bubble', 'Connected scatter', 'Density 2d', 'Barplot', 'Spider / Radar', 'Wordcloud', 'Parallel', 'Lollipop', 'Circular Barplot', 'Treemap', 'Doughnut', 'Pie chart', 'Dendrogram', 'Circular packing', 'Line plot', 'Area', 'Stacked area', 'Streamchart', 'Map', 'Choropleth', 'Hexbin map', 'Cartogram', 'Connection', 'Bubble map', 'Chord diagram', 'Network', 'Sankey', 'Arc diagram', 'Edge bundling', 'Basics', 'Custom', 'Interactivity', 'Shape helpers', 'Caveats', 'Data art']
    
    Here is the user's options to visualize. Remember, return two of these fields and the visualization option which is
    \n{option}
    `;
    // full options['Violin', 'Density', 'Histogram', 'Boxplot', 'Ridgeline', 'Scatter', 'Heatmap', 'Correlogram', 'Bubble', 'Connected scatter', 'Density 2d', 'Barplot', 'Spider / Radar', 'Wordcloud', 'Parallel', 'Lollipop', 'Circular Barplot', 'Treemap', 'Doughnut', 'Pie chart', 'Dendrogram', 'Circular packing', 'Line plot', 'Area', 'Stacked area', 'Streamchart', 'Map', 'Choropleth', 'Hexbin map', 'Cartogram', 'Connection', 'Bubble map', 'Chord diagram', 'Network', 'Sankey', 'Arc diagram', 'Edge bundling', 'Basics', 'Custom', 'Interactivity', 'Shape helpers', 'Caveats', 'Data art']

    const question = q;
    const options = o;

    const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;

    const prompt = new PromptTemplate({
      template: template,
      inputVariables: ["question", "option"],
      partialVariables: { format_instructions: formatInstructions },
    });

    const model = new OpenAI({ temperature: 0, openAIApiKey: apiKey });

    const chain = new LLMChain({ llm: model, prompt: prompt });
    const ans1 = await chain.call({question: question, option: options });
    const jsonStart = ans1.text.indexOf('{');
    const jsonEnd = ans1.text.lastIndexOf('}') + 1;
    const jsonString = ans1.text.substring(jsonStart, jsonEnd);
    const jsonObject = JSON.parse(jsonString);

    router.push({
      pathname: '/visualize',
      query: {
        formId: formsettings,
        visualization: jsonObject.Visualization, 
        field1: jsonObject.Field1, 
        field2: jsonObject.Field2 
      },
    });
    console.log(jsonObject);
  }
  

  useEffect(() => {
    if (formsettings && !isFetched) {
      fetchFormData();
      setIsFetched(true);
    }
    if (typeof window !== 'undefined') {
      setUsername(localStorage.getItem('username'));
    }
  }, [fetchFormData, formsettings]);

  return (
    <>
      <Head>
        <title>GraphForms</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{fontFamily:"'Poppins', sans-serif"}} className='bg-white'>
        <ToastContainer/>
        <Sidebar/>
        <Navbar />
        <div id='body' className='mt-[10vh] text-center'>
          {fetchedData && (
            <div>
              <p className='text-center font-medium text-[#444444] mb-4'>Settings for form:</p>
              <h1 className='text-5xl font-semibold'>{fetchedData.name}</h1>
              <div className='mt-3 flex'>
                <div className='mx-auto w-1/2 border-b-4 mb-[8px]'></div>
              </div>
              <div className='flex'>
  <div className="mx-auto w-3/4"> 
    <div className="flex">
      <div className="border-r-2 px-2 py-5">
        <ul className="list-style-none font-semibold">
          <li onClick={()=>setCurrSet(1)} className="rounded-xl hover:bg-slate-200">General</li>
          <li onClick={()=>setCurrSet(2)} className="mt-5 rounded-xl hover:bg-slate-200">Data</li>
        </ul>
      </div>
    <div className='my-5 mx-auto w-1/2'>
      {currSet === 1 ? 
      <div>
        <p className='text-[#444444] text-left font-medium'>Export your data and use it for spreadsheets, machine learning models, and more.</p>
        <button onClick={createCSV} className="bg-black hover:bg-[#444444] text-white font-bold py-2 px-4 rounded mt-2 mb-5">
          Create CSV
        </button>
        <p className='mt-5 text-[#444444] font-medium text-left'>Permanently delete your form.</p>
        <button onClick={()=>setModal2Open(true)} className='bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-4 rounded mt-2'>
          Delete Form
        </button>
      </div>
       : currSet === 2 ? 
       <div>
        <p className='text-[#444444] text-left font-medium'>Visualize your collected data utilizing our groundbreaking AI-assisted technology.</p>
        {username == "admin" ? 
        <div>
          <button onClick={()=>setModalOpen(true)} className="bg-purple-500 hover:bg-purple-400 text-white font-bold py-2 px-4 rounded mt-2 mb-5">
            Visualize
          </button>
          <button onClick={()=>{getCSVHeadAndAnalyze()}}>Analyze data</button>
        </div>
        : <button className="bg-purple-500 hover:bg-purple-400 text-white font-bold py-2 px-4 rounded mt-2 mb-5">Currently Unavailable</button>}
       </div>
       : ""}
    
  </div>
    </div>
    <div>
    </div>
  </div>
    </div>
    <div className='mx-auto w-1/2 border-b-4 mb-[8px]'></div>
    {modalOpen ? 
      <>
      <div
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
      >
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              
              <h3 className="text-3xl text-black font-semibold">
                Visualize
              </h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setModalOpen(false)}
              >
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              <p>Describe what data you will like to use and how you would like to use it. You may specify the way you&apos;d like it visualized</p>
              <form onSubmit={(e) => {
                e.preventDefault();
                // @ts-ignore
                const shortNames = fetchedData.questions.map(question => question.shortName);

                gptPredict(visualizeInput, shortNames.join(", "));
              }}>
                <div className="mt-2 mx-auto flex max-w-screen-sm items-center justify-center">
                  <div className="w-full rounded-2xl bg-gradient-to-r from-purple-500 via-blue-500 to-red-500 p-1">
                    <div className="flex w-full items-center justify-center rounded-2xl back">
                        <input onChange={(e: any)=>setVisualizeInput(e)} placeholder="Visualize Boston's housing price by its crime rate." className='px-3 py-1 w-full bg-slate-200 rounded-2xl'></input>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-center p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setModalOpen(false)}
              >
                Close
              </button>
              
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>: ""}
    {modal2Open ? 
      <>
      <div
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
      >
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              
              <h3 className="text-3xl text-black font-semibold">
                Confirm Deletion
              </h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setModal2Open(false)}
              >
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              <p>Confirm that you would like to permanently delete your form. This action is <span className="font-bold">NOT</span> reversible.</p>
              <button onClick={deleteForm} className='mt-5 bg-red-600 text-white font-bold py-2 px-4 rounded mt-2'>
                Permanently Delete Form
              </button>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-center p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setModal2Open(false)}
              >
                Close
              </button>
              
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>: ""}

            </div>
          )}
        </div>
      </div>
    </>
  )
}
