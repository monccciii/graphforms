//@ts-nocheck
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function SimpleAuth({ children }) {
  const router = useRouter();
  const backendUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    const checkToken = async () => {
      if (router.pathname === '/' || router.pathname === '/login' || router.pathname === '/register' || router.pathname === '/viewform/[form]' || router.pathname === '/test') {
        return;
      }
      
      const token = localStorage.getItem('token');
      if (!token) {
        router.push('/login');
        return;
      }

      try {
        const response = await fetch(`${backendUrl}protectedconntest`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
  
        if (!response.ok) {
          localStorage.removeItem('token');
          router.push('/login');
        }
      } catch (error) {
        console.error(error);
        localStorage.removeItem('token');
        router.push('/login');
      }
    }

    if (typeof window !== 'undefined') {
      checkToken();
    }
  }, [backendUrl, router])

  return (
    <>
      <main>{children}</main>
    </>
  );
}
