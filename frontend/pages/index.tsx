import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react';


export default function Landing() {
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(process.env.NEXT_PUBLIC_API_URL);
      const data = await response.json();
      console.log(data);
    };
    fetchData();
  }, []);


  return (
    <>
      <Head>
        <title>GraphForms</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='bg-black h-[100vh]'>
        <p className='text-center text-white text-2xl'>
          No.
        </p>
      </div>
    </>
  )
}
