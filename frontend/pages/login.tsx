import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import { setToken } from '../store/reducers/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
  const backendUrl = process.env.NEXT_PUBLIC_API_URL;
  const router = useRouter();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoggedin, setIsLoggedin] = useState<boolean>(false);
  const dispatch = useDispatch();
  

  async function login(username: string, password: string) {
    const backendUrl = process.env.NEXT_PUBLIC_API_URL;
    try {
      const response = await fetch(`${backendUrl}login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          Username: username,
          Password: password
        })
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        dispatch(setToken(data.token));
        toast.success('Successfully logged in!', {
          position: toast.POSITION.TOP_RIGHT
        });
        localStorage.setItem('username', username);
        setTimeout(()=>router.push('/hub'), 1500)
      } else {
        console.error(response.status);
        if (response.status==401){
          toast.error('Incorrect username or password!', {
            position: toast.POSITION.TOP_RIGHT
          });
        } else if (response.status==(404)){
          toast.error('Account does not exist!', {
            position: toast.POSITION.TOP_RIGHT
          });
        }
        else {
          toast.error('An unknown error occurred, please try again.', {
            position: toast.POSITION.TOP_RIGHT
          });
        }
      }
    } catch (error) {
      console.error(error);
    }
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
      <div style={{fontFamily:"'Poppins', sans-serif"}} className='bg-white'>
        <ToastContainer/>
        <div id='navbar' className='flex text-center py-5'>
          <p onClick={()=>router.push('/')} className='mx-auto font-medium text-xl'>GraphForms</p>
        </div>
        <div id='body' className='mt-[10vh] text-center'>
          <p className='font-semibold text-5xl'>Welcome back.</p>
          <div className='flex'>
            <div id='form' className='mx-auto mt-[10vh]'>
              <input
                className='bg-[#F2F2F2] border-b border-black p-2 rounded-xl w-[25vw]'
                placeholder='Username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              /><br></br>
              <input
                className='mt-[5vh] border-b border-black bg-[#F2F2F2] p-2 rounded-xl w-[25vw]'
                placeholder='Password'
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              /><br></br>
              <button onClick={()=>login(username, password)} className='mt-[8vh] bg-black text-white text-[18px] rounded-xl py-1 px-10'>Login.</button>
            </div>
          </div>
          <p className='mt-[1vh] font-medium text-center'>or</p>
          <button onClick={()=>router.push('/register')}className='mt-[1vh] border border-black text-[15px] rounded-2xl py-1 px-6'>Register an account.</button>
        </div>
  
      </div>
    </>
  )
}
