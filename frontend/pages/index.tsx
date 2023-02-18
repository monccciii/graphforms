import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react';


export default function Landing() {

  async function fetchData() {
      const response = await fetch(process.env.NEXT_PUBLIC_API_URL);
      const data = await response.json();
      console.log(data);
    }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <>
      <Head>
        <title>GraphForms</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='bg-white h-[100vh]'>
        <div className='p-5 bg-slate-200 w-full'>
        <h1 className='text-left text-black text-3xl'>Graphforms</h1>

        </div>
=        <p className='text-center text-black text-xl'>
          No! test2
        </p>
      </div>
    </>
  )
}
