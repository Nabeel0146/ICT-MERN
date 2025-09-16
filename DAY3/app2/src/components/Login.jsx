import React from 'react'
import '../styles/loginstyles.css';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Login = () => {
    return (

        <div className='splitcontainer'>
            <div className='leftside'>


            </div>




            <div className='rightside'>

                <div className='login-container'>
                    <div className='login-box'>
                        <h1>Login</h1>
                        <p>Welcome Back, login to your account</p>
                        Username: <input className='fields' type="text" />
                        <br />

                        Password: <input className='fields' type="password" />
                        <br />
                        <Link to="/home">
                            <Button variant="contained" color='success'>Lets GO</Button>
                        </Link>


                        <br />
                        <p>Do not have an account?</p>


                        <Link to="/signup">
                            <Button variant="text" color='success' size='2'>Create an Account</Button>

                        </Link>




                    </div>

                </div>

            </div>

        </div>


    )
}

export default Login