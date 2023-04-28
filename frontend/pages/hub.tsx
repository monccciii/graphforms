import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { ToastContainer } from 'react-toastify';
import 'components/sidebar'
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from 'components/sidebar';
import Navbar from '@/components/navbar';

export default function Hub() {
  const backendUrl: string = process.env.NEXT_PUBLIC_API_URL!;
  const router = useRouter();
 
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
            <p className='font-bold text-3xl sm:text-5xl mb-5'>GraphForms Hub</p>
            <div className='flex mb-20'>
              <div className='mx-auto w-1/2 border-t-2 border-b-2 py-10'>
                <p className='text-xl text-left font-medium'>See what you can do with GraphForms.</p>
                <div className='mt-4 text-left mb-5'>
                  <button onClick={()=>router.push('/workspace')} className='bg-black text-white font-medium py-2 px-4 rounded'>
                    View your workspace
                  </button>
                </div>
                <p className='text-xl text-left font-medium'>See our recent updates.</p>
                <div className='mt-4 text-left mb-5'>
                  <button className='bg-black text-white font-medium py-2 px-4 rounded'>
                    View our updates.
                  </button>
                </div>
              </div>
            </div>
            <p className='font-semibold sm:text-4xl text-2xl'>Recent forms</p>
            <div className='flex mb-20'>
              <div className='mx-auto w-1/2 border-t-2 border-b-2 py-10'>
              {/* Write code to grab all the forms created recently */}
              <p>N/A</p>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}
