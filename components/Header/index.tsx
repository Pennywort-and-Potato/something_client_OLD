'use client'

import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Image from 'next/image';
import logo from '@/public/logo.png';
import s from './headlayout.module.scss'
import { InputBase, Link, Paper, Stack } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { getUser } from '@/common/api'

type Props = {};

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


const Header = (props: Props) => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const [checkLocal, setLocalSt] = useState<boolean>();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  useEffect(() => {
    const localSt = localStorage.getItem('account');
    localSt ? setLocalSt(true) : setLocalSt(false)
    
  },[checkLocal])
  





  function RenderButton () {
    console.log("checkLocal",checkLocal )
    return checkLocal ? (<Avatar />) 
    : ( <Stack spacing={2} direction="row">
      <Link href="/login" underline='none'>
        <Button 
          variant="outlined"
          color="success"
        >
          Login
        </Button>
      </Link>
      <Link href="/register" underline='none'>
        <Button 
          variant="contained" 
          color="success"
        >
          Register
        </Button>
      </Link>
    </Stack>
    )

    // getUser(`${localSt}`).then( res =>{
    //   return res.success == true ? (<Avatar />) : (
    //     <Stack spacing={2} direction="row">
    //        <Link href="/login" underline='none'>
    //          <Button 
    //            variant="outlined"
    //            color="success"
    //          >
    //            Login
    //          </Button>
    //        </Link>
    //        <Link href="/register" underline='none'>
    //          <Button 
    //            variant="contained" 
    //            color="success"
    //          >
    //           Register
    //          </Button>
    //       </Link>
    //      </Stack> 

    //   )
      
    // })

    // return  getUser(`${localSt}`).then( res =>{
    //   if(res.success == true) {
    //     <Avatar />
    //   } else {
       
    //   }
    // })
  }

  return (
  <>
  
  <AppBar position="static" color='transparent' style={{ borderRadius: '30px'}} variant="outlined">
    
    <Container maxWidth="xl">
      <Toolbar disableGutters>
        
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          <div className={s['box-img']}>
            <Image 
              fill
              alt='logo'
              src={logo}
            />
          </div>
        </Typography>

        
        
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <Typography
            style={{ margin: '10px 0'}}
            align="center"
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <div className={s['box-img']}>
              <Image 
                fill
                alt='logo'
                src={logo}
              />
            </div>
          </Typography>
        </Box>
       
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {pages.map((page) => (
            <Button
              key={page}
              onClick={handleCloseNavMenu}
              sx={{ my: 3, color: 'black', display: 'block' }}
            >
              {page}
            </Button>
          ))}
        </Box>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Paper
              component="form"
              variant="outlined"
              sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
            >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search Keywords"
              inputProps={{ 'aria-label': 'search keywords' }}
            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
              <SearchIcon />
            </IconButton>
            
          </Paper>
        </Box>

        <Box sx={{ flexGrow: 0, display: { xs: 'flex'} }}>
          <RenderButton />
          {/* <Stack spacing={2} direction="row">
            <Link href="/login" underline='none'>
              <Button 
                variant="outlined"
                color="success"
              >
                Login
              </Button>
            </Link>
            <Link href="/register" underline='none'>
              <Button 
                variant="contained" 
                color="success"
              >
                Register
              </Button>
            </Link>
          </Stack>   */}
        </Box>
      </Toolbar>
    </Container>
  </AppBar>

  
      <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
      <div className={s['btn-nav']}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: 'block', md: 'none' },
          }}
        >
          {pages.map((page) => (
            <MenuItem key={page} onClick={handleCloseNavMenu}>
              <Typography textAlign="center">{page}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </div>
      </Box>
  
  </>
  );
};

export default Header;
