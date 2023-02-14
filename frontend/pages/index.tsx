import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='bg-black h-[100vh]'>
        <p className='text-white text-center text-2xl'>test</p>
        <div className='flex'>
        <button className='2xl mx-auto text-white bg-blue-500 rounded-2xl p-10'>Counter increment</button>
        </div>
        <p>#</p>
      </div>
    </>
  )
}