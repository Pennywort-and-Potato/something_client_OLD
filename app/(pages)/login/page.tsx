'use client';

import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, Paper, TextField } from '@mui/material';
import { Box, Container } from '@mui/system';
import React, { useState } from 'react';
import s from './styles.module.scss';
import { Link } from '@mui/material';
import { login } from '@/common/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';

type Props = {};

const Index = (props: Props) => {

  const router = useRouter()

  const onSubmitLogin = (event: any) => {
    event.preventDefault()
    let data = new FormData(event.currentTarget)
    let params = {
      username: data.get('username') as string , 
      password: data.get('password') as string
    }

    login(params).then(res => {
      
      if(res.success == true){
        console.log("res", res)
        router.push('/')
        localStorage.setItem('account', res.jwt);


        toast.success('You have successfully logined!', {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
          
          
      } else {
        console.log("res", res)
        toast.error('Incorrect username or password!', {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
      }
    })
  }

  return (
    <>
      <Container maxWidth='xl'>
        <ToastContainer />
        <Box sx={{ flexGrow: 1, display: { xs: 'block' } }}>
          <div style={{ width: '100%', textAlign: 'center' }}>
            <h2 className={s['title-h2']}>Login</h2>
          </div>
          <Paper
            component='form'
            variant='outlined'
            onSubmit={onSubmitLogin}
            sx={{
              p: '20px',
              display: 'flex',
              alignItems: 'center',
              width: 500,
              m: '20px auto',
            }}
            style={{ flexWrap: 'wrap' }}
          >
            <TextField
              fullWidth
              id='username'
              label='username'
              name='username'
              variant='outlined'
              margin='normal'
              color='success'
            />
          
            <TextField
              fullWidth
              id='password'
              label='password'
              name='password'
              variant='outlined'
              margin='normal'
              color='success'
            />

            <div className={s['bottom-form']}>
              <FormGroup>
                <FormControlLabel control={<Checkbox defaultChecked color='success' />} label="Save account" />
              </FormGroup>
              <Link href="/register" underline="hover">Sign up for an account</Link>
            </div>
            <div className={s['btn-form']}>
              <Button fullWidth={true} variant="contained" color='success' size='large' type='submit'>Login</Button>
            </div>
          </Paper> 
        </Box>
      </Container>
    </>
  );
};

export default Index;
