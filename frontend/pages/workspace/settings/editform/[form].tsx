import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { ToastContainer } from 'react-toastify';
import 'components/sidebar'
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from 'components/sidebar';
import Navbar from '@/components/navbar';

export default function EditForm() {
  const backendUrl: string = process.env.NEXT_PUBLIC_API_URL!;
  const router = useRouter();
  const { form } = router.query;


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

        </div>
      </div>
    </>
  )
}
