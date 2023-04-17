//@ts-nocheck
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function SimpleAuth({ children }) {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Ignore token check for "/" and "/register" routes
      if (router.pathname === '/' || router.pathname === '/register') {
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
