import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from 'components/sidebar';

//fix local storage issues im taking a break

export default function Createform() {
  const [questionCount, setQuestionCount] = useState(1);
  const [creator, setCreator] = useState<String>('');
  const [formname, setFormname] = useState<String>('');
  const [description, setDescription] = useState<String>('');
  const [formData, setFormData] = useState<any[]>([
    { question: '', type: 'text', options: [] },
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

  function storeData() {
    const dataToStore = {
      creator: creator,
      name: formname,
      description: description,
      questions: formData,
    };
    console.log(dataToStore);
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
        <div id="navbar" className="flex text-center py-5">
          <p onClick={() => router.push('/hub')} className="mx-auto font-medium text-xl">
            GraphForms
          </p>
        </div>
        <div id="body" className="mt-[10vh] px-[25%] text-center">
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
              <div className='text-left'>
                <select
                  value={formData[i].type}
                  onChange={(e) => updateFormData(i, 'type', e.target.value)}
                  className="ml-4"
                >
                  <option value="text">Text</option>
                  <option value="choice">Multiple Choice</option>
                </select>
              </div>
              {formData[i].type === 'choice' &&
                formData[i].options.map((_:any, optionIndex:any) => (
                  <div className='ml-5 text-left' key={optionIndex}>
                    <input
                      value={formData[i].options[optionIndex]}
                      onChange={(e) => updateOption(i, optionIndex, e.target.value)}
                      placeholder={`Option ${optionIndex + 1}`}
                    />
                  </div>
                ))}
              {formData[i].type === 'choice' && (
                <button onClick={() => addOption(i)} className="bg-black text-white font-bold py-2 px-4 rounded mt-4">
                  Add Option
                </button>
              )}
            </div>
          ))}
             <button onClick={addQuestion} className="bg-black text-white font-bold py-2 px-4 rounded mr-4">
                +
              </button>
          <button onClick={storeData} className="bg-black text-white font-bold py-2 px-4 rounded mt-4">
            Store Data
          </button>
        </div>
      </div>
    </>
);
}    
