'use client';
import {
  Box,
  Button,
  Container,
  Link,
  Paper,
  Stack,
  TextField,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import s from './styles.module.scss';
import { register } from '@/common/api';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


type Props = {};

function Register(props: Props) {

  const [error, setError] = useState<any>()
  const router = useRouter()
  useEffect(() => {
    console.log(error)
  })

  const onSubmit = (event: any) => {
    event.preventDefault()
    // console.log('go go')
    let data = new FormData(event.currentTarget)
    let dateOfBirth = new Date(`${data.get('date')}`)
    // console.log(data.get('date'), 'test')
    if (data.get('password') !== data.get('password-config')) return
    if(!(data.get('username') || data.get('email') || data.get('password'))) return

    let params = {
      username: data.get('username') as string,
      first_name: data.get('first_name') as string,
      last_name: data.get('last_name') as string,
      date_of_birth: dateOfBirth,
      email: data.get('email') as string,
      password: data.get('password') as string,
    }
    // console.log(params)

    // register(params)
  register(params).then(res => {
      if(res.success == true) {
        router.push('/login')
        toast.success('You have successfully registered!', {
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
        console.log(res)
        setError(res.error)
        toast.error('Your information is incorrect or duplicated!', {
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
        <ToastContainer 
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <Box sx={{ flexGrow: 1, display: { xs: 'block' } }}>
          <div style={{ width: '100%', textAlign: 'center' }}>
            <h2 className={s['title-h2']}>Register</h2>
          </div>
          <Paper
            component='form'
            onSubmit={onSubmit}
            variant='outlined'
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
              required
              id='first_name'
              name='first_name'
              label='First name'
              variant='outlined'
              margin='normal'
              color='success'
            />

            <TextField
              fullWidth
              required
              id='last_name'
              name='last_name'
              label='Last name'
              variant='outlined'
              margin='normal'
              color='success'
            />
           
              <TextField
                fullWidth
                id="date"
                name='date'
                label="Birthday"
                type="date"
                defaultValue="2017-05-24"
                InputLabelProps={{
                  shrink: true,
                  
                }}
                
              />
            
            <TextField
              required
              error={!!error?.email}
              fullWidth
              id='email'
              name='email'
              label='Email'
              variant='outlined'
              margin='normal'
              color='success'
            />
            <TextField
              required
              error={!!error?.username}
              fullWidth
              id='username'
              name='username'
              label='Account'
              variant='outlined'
              margin='normal'
              color='success'
            />

            <TextField
              required
              fullWidth
              id='password'
              name='password'
              label='Password'
              variant='outlined'
              margin='normal'
              color='success'
            />

            <TextField
              required
              fullWidth
              id='password-config'
              name='password-config'
              label='Enter the password'
              variant='outlined'
              margin='normal'
              color='success'
            />
            <div className={s['bottom-form']}>
              <Link
                href='/login'
                underline='hover'
              >
                Sign up for an account
              </Link>
            </div>
            <div className={s['btn-form']}>
              <Button
                fullWidth={true}
                variant='contained'
                color='success'
                size='large'
                type='submit'
              >
                Register
              </Button>
            </div>
          </Paper>
        </Box>
      </Container>
    </>
  );
}

export default Register;
