import '../styles/globals.css'

import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'

import store from '../store/store'
import SimpleAuth from '@/components/simpleauth'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <SimpleAuth>
        <Component {...pageProps} />
      </SimpleAuth>
    </Provider>
  )
}