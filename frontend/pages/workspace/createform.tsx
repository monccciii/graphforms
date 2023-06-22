import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from 'components/sidebar';
import Navbar from '@/components/navbar';


export default function Createform() {
  const [questionCount, setQuestionCount] = useState(1);
  const [creator, setCreator] = useState<String>('');
  const [formname, setFormname] = useState<String>('');
  const [description, setDescription] = useState<String>('');
  const [formData, setFormData] = useState<any[]>([
    { question: '', type: 'text', options: [], shortName: '' },
  ]);
  const router = useRouter();

  function addQuestion() {
    setFormData([...formData, { question: '', type: 'text', options: [] }]);
    setQuestionCount(questionCount + 1);
  }

  function updateFormData(index: number, field: string, value: any) {
    const updatedFormData = [...formData];
    updatedFormData[index][field] = value;
    setFormData(updatedFormData);
  }

  function updateOption(index: number, optionIndex: number, value: string) {
    const updatedFormData = [...formData];
    updatedFormData[index].options[optionIndex] = value;
    setFormData(updatedFormData);
  }

  function addOption(index: number) {
    const updatedFormData = [...formData];
    updatedFormData[index].options.push('');
    setFormData(updatedFormData);
  }

  function removeQuestion(index: number) {
    const updatedFormData = [...formData];
    updatedFormData.splice(index, 1);
    setFormData(updatedFormData);
    setQuestionCount(questionCount - 1);
  }

  function removeOption(questionIndex: number, optionIndex: number) {
    const updatedFormData = [...formData];
    updatedFormData[questionIndex].options.splice(optionIndex, 1);
    setFormData(updatedFormData);
  }

  async function storeData() {
    const dataToStore = {
      creator: creator,
      name: formname,
      description: description,
      questions: formData,
    };
    const backendUrl = process.env.NEXT_PUBLIC_API_URL;
    let token = null;
    if (typeof window !== 'undefined') {
      token = localStorage.getItem('token');
    }
    try {
      const response = await fetch(`${backendUrl}createform`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(dataToStore),
      });
  
      if (response.ok) {
        const jsonResponse = await response.json();
        console.log(jsonResponse);
        // Handle the response, such as showing a success message or redirecting to another page
        toast.success('Form successfully created!', {
          position: toast.POSITION.TOP_RIGHT
        });
        // Redirect or perform any other action on success
      } else {
        console.error(response.status);
        if (response.status == 400) {
          toast.error('Invalid form data!', {
            position: toast.POSITION.TOP_RIGHT
          });
        } else if (response.status == 401) {
          toast.error('Unauthorized access!', {
            position: toast.POSITION.TOP_RIGHT
          });
        } else {
          toast.error('An unknown error occurred, please try again.', {
            position: toast.POSITION.TOP_RIGHT
          });
        }
      }
    } catch (error) {
      console.error(error);
      toast.error('An error occurred while sending the request, please try again.', {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const username = localStorage.getItem("username");
      setCreator(username || '');
    }
  }, []);

  return (
    <>
      <Head>
        <title>GraphForms</title>
        <meta name="description" content="Create a form on GraphForms" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{ fontFamily: "'Poppins', sans-serif" }} className="bg-white">
        <ToastContainer />
        <Sidebar />
        <Navbar />
        <div id="body" className="mt-[10vh] px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64 text-center">
          <input className="text-3xl sm:text-5xl text-center font-bold" placeholder="Form title" onChange={(e) => setFormname(e.target.value)}></input>
          <br />
          <p className="text-xl text-slate-500 text-center font-semibold mb-5">By: {creator}</p>
          <br />
          <textarea
            className="w-full text-xl text-slate-500 text-center font-semibold mb-5"
            placeholder="Form description"
            onChange={(e) => setDescription(e.target.value)}
            rows={3}
          ></textarea>
          {[...Array(questionCount)].map((_, i) => (
            <div key={i} className="text-2xl font-bold">
  <div className='flex'>
    <p>{i + 1}.</p>
    <input
      className="text-2xl ml-5 font-semibold"
      placeholder="Ask a question..."
      value={formData[i].question}
      onChange={(e) => updateFormData(i, 'question', e.target.value)}
    ></input>
  </div>
  <div className='text-left mb-5'>
    <input
      className="text-sm ml-5 font-semibold"
      placeholder="Short Name"
      value={formData[i].shortName}
      onChange={(e) => updateFormData(i, 'shortName', e.target.value)}
    ></input>
    <select
      value={formData[i].type}
      onChange={(e) => updateFormData(i, 'type', e.target.value)}
      className="text-sm font-regular ml-4"
    >
      <option value="text">Text</option>
      <option value="choice">Multiple Choice</option>
    </select>
    <button onClick={() => removeQuestion(i)} className="bg-red-600 text-white font-bold text-sm py-1 px-2 rounded mt-4 ml-4">
              Remove Question
        </button>
  </div>
  <div className="flex flex-col">
    {formData[i].type === 'choice' &&
      formData[i].options.map((_: any, optionIndex: any) => (
        <div className='flex items-center ml-5 text-left mb-2' key={optionIndex}>
          <div className='border border-slate-800 mr-1 rounded-2xl h-2 w-2'></div>
          <input
            value={formData[i].options[optionIndex]}
            onChange={(e) => updateOption(i, optionIndex, e.target.value)}
            placeholder={`Option ${optionIndex + 1}`}
            className='text-sm font-semibold'
          />
          <button onClick={() => removeOption(i, optionIndex)} className="bg-red-600 text-white text-[12px] font-bold text-sm py-1 px-2 rounded ml-4">
          Remove Option
          </button>
        </div>
      ))}
    {formData[i].type === 'choice' && (
      <div className="mb-5">
        <button onClick={() => addOption(i)} className="bg-black text-white font-bold text-sm py-1 px-2 rounded mt-4">
          Add Option
        </button>
      </div>
    )}
  </div>
</div>

          ))}
          <div className="flex">
            <button onClick={addQuestion} className="mx-auto bg-black text-white font-bold py-2 px-4 rounded ml-4">
                + Add Question
              </button>
          </div>
          <button onClick={storeData} className="bg-green-600 text-white font-bold py-2 px-4 rounded mt-4">
            Create Form
          </button>
        </div>
      </div>
    </>
);
}    
