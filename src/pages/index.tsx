import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import MainLayout from '../layouts/MainLayout'

function renderContent() {
  return (
    <>
    </>
  )
}

function Home() {

  const headerConfig = (
    <Head>
      <title>Pennywort & Potato</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/icon.png" />
    </Head>
  )

  const data = {
    content: renderContent(),
    props: { test: true }
  }

  return (
    <>
      {headerConfig}
      <MainLayout {...data} />
    </>
  )
}

export default Home
