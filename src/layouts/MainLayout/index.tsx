import { Layout } from 'antd';
import React from 'react'
import Image from 'next/image';
import style from '../MainLayout/style.module.css'
import Link from 'next/link';

interface data {
  content: any;
}

const { Header, Content, Footer } = Layout;

const layoutStyle = {
  minHeight: '100vh'
}

const footerStyle = {
  backgroundColor: '#001529',
  color: 'rgb(82 200 235)',
}

const contentStyle = {
  backgroundColor: '#fff'
}

function MainLayout(data: data) {

  const { content } = data 
  
  return (
    <Layout style={layoutStyle}>
      <Header>
        <div className={style.header}>
          <Link href='/' style={{ display: 'flex' }}>
            <Image 
              className={style.icon}
              src='/icon.png' alt='' 
              width={30} 
              height={30}
            />
          </Link>
        </div>
      </Header>
      <Content style={contentStyle}>
        {content}
      </Content>
      <Footer style={footerStyle}>
        @First credit - Tue 17 Jan 2023
      </Footer>
    </Layout>
  )
}


export default MainLayout
