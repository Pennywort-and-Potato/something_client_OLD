import React from 'react'
import style from '../MainLayout/style.module.css'
import Footer from './Footer';
import Header from './Header';

interface props {
  content: any;
}

function MainLayout(props: props) {

  const { content } = props
  
  return (
    <>
      <div className={style.container}>
        <Header />
        <div className={style.body}>
          {content}
        </div>
        <Footer />
      </div>
    </>
  )
}


export default MainLayout
