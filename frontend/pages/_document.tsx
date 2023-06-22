//@ts-nocheck
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  
  return (
    <Html>
        <Head>
        <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" /> 
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>               
        </Head>
        <body className='cursor-pointer'>
          <Main />
          <NextScript />
        </body>
      </Html>
  )
}
