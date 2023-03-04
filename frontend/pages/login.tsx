import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
export default function Login() {
  const backendUrl = process.env.NEXT_PUBLIC_API_URL;
  const router = useRouter();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoggedin, setIsLoggedin] = useState<boolean>(false);

  function login() {
    fetch(`http://${backendUrl}login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        Username: username,
        Password: password
      })
    }).then(response => {
      return response.json();
    }).then(data => {
      console.log(data);
      setIsLoggedin(true);
    }).catch(error => {
      console.error(error);
    });
  }
  
  async function fetchRoot() {
    try {
      const response = await fetch(`http://${backendUrl}conntest`);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (isLoggedin) {
      router.push("/")
    }
  })

  return (
    <>
      <Head>
        <title>Login to GraphForms</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='bg-white h-[100vh]'>
        <div className='p-5 bg-black w-full'>
        <p className='font-bold text-white text-2xl'>GraphForms</p>

        </div>
        <p className='text-center text-black text-xl'></p>
        <div className='flex'>
            <div className='mx-auto'>
            <input onChange={(e)=>setUsername(e.target.value)} placeholder='username'></input>
            <input onChange={(e)=>setPassword(e.target.value)} placeholder='password'></input>
            <button className='bg-blue-500 p-5 text-white' onClick={() => login()}>Login</button>
            </div>
          </div>
      </div>
    </>
  )
}
