import { Link } from 'react-router-dom';
import { Button } from '@mui/material'
import { AppBar, Table, TableCell, TableContainer, TableHead, TableRow, Toolbar } from '@mui/material'
import React from 'react'
import UserTable from '../components/UserTable';
import Welcome from '../components/Welcome';



export const Home = () => {
    return (
        <div>
            <AppBar>
                <Toolbar>
                    <h1>My App</h1>
                    <Link to="/signup">
                        <Button variant="contained" size='2'>Create an Account</Button>

                    </Link>&nbsp;
                    <Link to="/counterr">
                        <Button variant="contained" size='2'>Counter Page</Button>

                    </Link>&nbsp;
                    <Link to="/buttonpage">
                        <Button variant="contained" size='2'>Button Page</Button>

                    </Link>
                </Toolbar>
            </AppBar>
            <br/>

            <Welcome />
            <br />
            <UserTable />
            <br />
            
           


        </div>

    )
}
