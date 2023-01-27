import styles from '@/styles/Home.module.css'
import { useEffect } from 'react'

function Home() {

  useEffect(() => {
    console.log('render')
  }, [])

  return (
    <>
      <div>Content</div>
    </>
  )
}

export default Home
