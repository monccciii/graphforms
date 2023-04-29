//@ts-nocheck
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function SimpleAuth({ children }) {
  const router = useRouter();
  const backendUrl = process.env.NEXT_PUBLIC_API_URL;
  async function fetchRoot() {
    try {
      const response = await fetch(`${backendUrl}protectedconntest`);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (router.pathname === '/' || router.pathname === '/login' ||router.pathname === '/register' || router.pathname === '/viewform/[form]' || router.pathname === '/test') {
        return;
      }

      const token = localStorage.getItem('token');

      if (!token) {
        router.push('/login');
      }

      try {
        const response = (`${backendUrl}protectedconntest`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
  
        if (response.ok) {

        } else {
          localStorage.removeItem('token');
          router.push('/login');
        }
      } catch (error) {
        console.error(error);
      }
    }})

  return (
    <>
      <main>{children}</main>
    </>
  );
  }