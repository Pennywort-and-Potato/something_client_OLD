import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import MainLayout from '../layouts/MainLayout'
import { useEffect } from 'react'

function renderContent() {
  return (
    <>
    </>
  )
}

function Home() {

  useEffect(() => {
    console.log('render')
  }, [])

  const headerConfig = (
    <Head>
      <title>Pennywort & Potato</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/icon.png" />
    </Head>
  )

  return (
    <>
      {headerConfig}
      <div>abc</div>
    </>
  )
}

export default Home
