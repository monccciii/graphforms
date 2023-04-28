//@ts-nocheck
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function SimpleAuth({ children }) {
  const router = useRouter();

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
    if (typeof window !== 'undefined') {
      if (router.pathname === '/' || router.pathname === '/register' || router.pathname === '/viewform/[form]') {
        return;
      }

      const token = localStorage.getItem('token');

      if (!token) {
        router.push('/login');
      }
    }
  }, []);

  return (
    <>
      <main>{children}</main>
    </>
  );
}
