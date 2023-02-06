import styles from '@/styles/Home.module.css'
import { Space } from 'antd'
import Image from 'next/image'
import { useState } from 'react'

// Dummy for exam, do not use directed from import
import { limitedContents } from '../common/Dummy/contents'
// Contents max of 100, get all by { allTheContents } (do not recommended)
// Warning lag issue
import { allThePosts } from '../common/Dummy/posts'


function Home() {

  const [ contents, setContents ] = useState(limitedContents(20))
  const [ posts, setPosts ] = useState(allThePosts())

  return (
    <>
      <Space wrap>
        {contents.map((content: any) => 
          <Image 
            src={content.src} alt={content.alt}
            width={100}
            height={100}
            // style={{ objectFit: 'contain' }}
          />
        )}
      </Space>
    </>
  )
}

export default Home
