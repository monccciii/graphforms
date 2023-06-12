import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'components/sidebar'
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from 'components/sidebar';
import Navbar from 'components/navbar';

export default function ViewForm() {
  const backendUrl: string = process.env.NEXT_PUBLIC_API_URL!;
  const router = useRouter();
  const { form } = router.query;
  const [fetchedData, setFetchedData] = useState<any>(null);
  const [responses, setResponses] = useState<any[]>([]);

  async function fetchFormData() {
    try {
      const response = await fetch(`${backendUrl}viewform`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: form
        })
      });
      const data = await response.json();
      setFetchedData(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  async function submitForm() {
    const dataToSubmit = {
      id: fetchedData.id,
      creator: fetchedData.creator,
      username: localStorage.getItem('username'),
      timestamp: new Date(),
      questions: responses,
    };
    try {
        const response = await fetch(`${backendUrl}submitform`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(dataToSubmit),
          });
          if (response.ok) {
            const jsonResponse = await response.json();
            console.log(jsonResponse);
            toast.success('Form submitted successfully!', {
              position: toast.POSITION.TOP_RIGHT
            });
          } else {
            console.error(response.status);
            toast.error('An unknown error occurred, please try again.', {
              position: toast.POSITION.TOP_RIGHT
            });
          }
    } catch (error ){
        console.error(error)   
        toast.error('An error occurred while sending the request, please try again.', {
            position: toast.POSITION.TOP_RIGHT
          });
    }
  }

  useEffect(()=>{
    if (form) {
    fetchFormData()
  }},[fetchFormData, form])


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
  <div className="mt-[10vh] px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64 text-center">
    <h1 className="text-3xl sm:text-5xl text-center font-bold">{fetchedData.name}</h1>
    <br />
    <p className="text-xl text-slate-500 text-center font-semibold mb-5">
      By: {fetchedData.creator}
    </p>
    <br />
    <p className="w-full text-xl text-slate-500 text-center font-semibold mb-5">
      {fetchedData.description}
    </p>
    {fetchedData.questions.map((questionObj: any, i: number) => (
        <div key={i} className="text-2xl font-bold mb-4">
            <div className="flex">
            <p>{i + 1}.</p>
            <p className="text-2xl ml-5 font-semibold">{questionObj.question}</p>
            </div>
            <div className="text-left">
            <p className="text-sm font-regular ml-4">
                {questionObj.type === 'text' ? 'Text' : 'Multiple Choice'}
            </p>
            </div>
            <div className="flex flex-col">
                {questionObj.type === 'text' && (
                    <input
                        className="border border-slate-800 rounded p-1 w-full text-sm mt-2"
                        placeholder="Type your answer here..."
                        value={responses[i]?.answer || ''}
                        onChange={(e) => {
                        const updatedResponses = [...responses];
                        updatedResponses[i] = { question: questionObj.question, answer: e.target.value };
                        setResponses(updatedResponses);
                        }}
                    />
            )}

            {questionObj.type === 'choice' &&
            questionObj.options.map((option: string, optionIndex: number) => (
                <div className="flex items-center ml-5 text-left" key={optionIndex}>
                <input
                    type="radio"
                    name={`question-${i}`}
                    value={option}
                    className="border border-slate-800 mr-1 rounded-full h-4 w-4"
                    checked={responses[i]?.answer === option}
                    onChange={(e) => {
                    const updatedResponses = [...responses];
                    updatedResponses[i] = { question: questionObj.question, answer: e.target.value };
                    setResponses(updatedResponses);
                    }}
                />
                <p className="text-sm font-semibold">{option}</p>
                </div>
            ))}

            </div>
        </div>
))}
    <button onClick={submitForm} className="mb-4 bg-black text-white font-bold py-2 px-4 rounded mt-4">
    Submit Form
    </button>
  </div>
)}
        </div>
      </div>
    </>
  )
}
