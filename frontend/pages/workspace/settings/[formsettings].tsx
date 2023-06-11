import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'components/sidebar'
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from 'components/sidebar';
import Navbar from '@/components/navbar';

export default function FormSettings() {
  const backendUrl: string = process.env.NEXT_PUBLIC_API_URL!;
  const router = useRouter();
  const { formsettings } = router.query;
  const [fetchedData, setFetchedData] = useState<any>(null);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [currSet, setCurrSet] = useState<number>(1)
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

  async function visualize() {
    setModalOpen(true);
  }
  
  
  

  useEffect(() => {
    console.log(formsettings)
    if (formsettings) {
      fetchFormData();
    }
  }, [formsettings]);

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
          <li onClick={()=>setCurrSet(1)} className="rounded-xl hover:bg-slate-100">General</li>
          <li onClick={()=>setCurrSet(2)} className="mt-5 rounded-xl hover:bg-slate-100">Data</li>
        </ul>
      </div>
    <div className='my-5 mx-auto w-1/2'>
      {currSet === 1 ? 
      <div>
        <p className='text-[#444444] text-left font-medium'>Export your data and use it for spreadsheets, machine learning models, and more.</p>
        <button onClick={createCSV} className="bg-black text-white font-bold py-2 px-4 rounded mt-2 mb-5">
          Create CSV
        </button>
        <p className='mt-5 text-[#444444] font-medium text-left'>Permanently delete your form.</p>
        <button onClick={deleteForm} className='bg-red-600 text-white font-bold py-2 px-4 rounded mt-2'>
          Delete Form
        </button>
      </div>
       : currSet === 2 ? 
       <div>
        <p className='text-[#444444] text-left font-medium'>Visualize your collected data utilizing our groundbreaking AI-assisted technology.</p>
        <button onClick={()=>setModalOpen(true)} className="bg-purple-500 text-white font-bold py-2 px-4 rounded mt-2 mb-5">
          Visualize
        </button>
       </div>
       : ""}
    
  </div>
    </div>
    <div>
    </div>
  </div>
  {/* <div className='flex mx-auto w-1/2'>
    <div className='mx-auto'>
      <p className='text-[#444444] text-left font-medium'>Export your data and use it for spreadsheets, machine learning models, and more.</p>
      <button onClick={createCSV} className="bg-black text-white font-bold py-2 px-4 rounded mt-2 mb-5">
        Create CSV
      </button>
    </div>
    <div className='mx-auto ml-auto'>
      <p className='text-[#444444] font-medium text-left'>Permanently delete your form.</p>
      <button onClick={deleteForm} className='bg-red-600 text-white font-bold py-2 px-4 rounded mt-2'>
        Delete Form
      </button>
    </div>
  </div> */}
    </div>
    <div className='mx-auto w-1/2 border-b-4 mb-[8px]'></div>
    {/* <div className='flex mx-auto w-1/2'>
    <div className="mx-auto">
      <p className='text-[#444444] text-left font-medium'>Export your data and use it for spreadsheets, machine learning models, and more.</p>
        <button onClick={()=>setModalOpen(true)} className="bg-purple-500 text-white font-bold py-2 px-4 rounded mt-2 mb-5">
          Visualize
        </button>
  </div>
    </div> */}
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
              <p>Describe what data you will like to use and how you would like to use it. You may specify the way you'd like it visualized</p>
              <div className="mt-2 mx-auto flex max-w-screen-sm items-center justify-center">
                <div className="w-full rounded-2xl bg-gradient-to-r from-purple-500 via-blue-500 to-red-500 p-1">
                  <div className="flex w-full items-center justify-center rounded-2xl back">
                    <input placeholder="Visualize Boston's housing price by its crime rate." className='px-3 py-1 w-full bg-slate-200 rounded-2xl'></input>
                  </div>
                </div>
              </div>
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

            </div>
          )}
        </div>
      </div>
    </>
  )
}