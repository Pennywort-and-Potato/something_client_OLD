import React, { useState } from 'react'
import style from '../MainLayout/style.module.css'
import Footer from './Footer';
import Header from './Header';

interface props {
  content: any;
}

function MainLayout(props: props) {

  const { content } = props
  const [ theme, setTheme ] = useState(false)

  const callback = (el: boolean) => {
    setTheme(el)
  }
  
  return (
    <>
      <div className={`${style.container} ${theme ? 'l-dark' : 'l-light'}`} >
        <Header changeTheme={callback}  />
        <div className={style.body}>
          {content}
        </div>
        <Footer />
      </div>
    </>
  )
}


export default MainLayout
