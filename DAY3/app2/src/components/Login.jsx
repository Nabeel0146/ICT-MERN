import React from 'react'
import '../styles/loginstyles.css';
import { Button } from '@mui/material';

const Login = () => {
  return (

    <div className='login-container'>
        <div className='login-box'>
        <h1>Login</h1>
        <p>Welcome Back, login to your account</p>
        Username: <input className='fields'  type="text" />
        <br />

        Password: <input className='fields' type="password" />
        <br />

        <Button variant="contained" color='success'>Lets GO</Button>

        </div>

    </div>
    
    
  )
}

export default Login