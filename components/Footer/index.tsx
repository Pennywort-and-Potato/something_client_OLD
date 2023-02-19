'use client'
import React from 'react';
import s from './footlayout.module.scss';
import { AppBar, Box, Container, Grid, Paper } from '@mui/material';
import { experimentalStyled as styled } from '@mui/material/styles';

import logo from '@/public/logo.png'
import Image from 'next/image';


type Props = {}


const Footer = (props: Props) => {
  return (
    <div className={s['footer-main']}>
      <Container maxWidth="xl">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={{ xs: 2, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item xs={4}>
              <div className={s['footer-col']}>
                <div className={s['box-img']}>
                  <Image 
                    fill
                    alt='logo'
                    src={logo}
                  />
                </div>
                <div className={s['description']}>
                  <p>Life is full of unpleasant things that we cannot avoid. The only thing that can be done is to change the perspective of it.</p>
                </div>
              </div>
            </Grid>
            <Grid item xs={4}>
            <div className={s['footer-col']}>
              <h2 className={s['title-h2']}>
                List item
              </h2>
              <ul className={s['box-ul']} style={{ textAlign: 'center'}}>
                <li className={s['item-li']}>
                  <a href="" className={s['a']}>Item 1</a>
                </li>
                <li className={s['item-li']}>
                  <a href="" className={s['a']}>Item 2</a>
                </li>
                <li className={s['item-li']}>
                  <a href="" className={s['a']}>Item 3</a>
                </li>
                <li className={s['item-li']}>
                  <a href="" className={s['a']}>Item 4</a>
                </li>
              </ul>
            </div>
            </Grid>
            <Grid item xs={4}>
            <div className={s['footer-col']}>
              <h2 className={s['title-h2']}>
                Fanpage
              </h2>
              <div className={s['box-iframe']}></div>
            </div>
            </Grid>
            
          </Grid>
        </Box>
      </Container>
    </div>  
   
  )
}

export default Footer