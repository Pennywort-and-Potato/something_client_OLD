import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import MainLayout from '../layouts/MainLayout'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {

  const data = {
    content: <Component {...pageProps} />
  }

  return <>
    <Head>
      <title>Pennywort & Potato</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/icon.png" />
    </Head>
    <MainLayout {...data} />
  </>
}
