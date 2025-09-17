import { Link } from 'react-router-dom';
import { Button } from '@mui/material'
import { AppBar, Table, TableCell, TableContainer, TableHead, TableRow, Toolbar } from '@mui/material'
import React from 'react'
import UserTable from '../components/UserTable';
import Welcome from '../components/Welcome';



export const Home = () => {
    return (
        <div>
            <AppBar sx={{ backgroundColor: "#8bdfbbff", boxShadow: "none" }}>
                <Toolbar>
                    <h1 className='linkspace'>My App</h1>
                    &nbsp;
                    <Link to="/signup" >
                        <Button variant="text" size='2'>Create an Account</Button>

                    </Link>&nbsp;
                    <Link to="/counterr">
                        <Button variant="text" size='2'>Counter Page</Button>

                    </Link>&nbsp;
                    <Link to="/cardpage">
                        <Button variant="text" size='2'>Card Page</Button>

                    </Link>&nbsp;
                    <Link to="/productpage">
                        <Button variant="text" size='2'>Products Page</Button>

                    </Link>&nbsp;
                    <Link to="/buttonpage">
                        <Button variant="text" size='2'>Button Page</Button>

                    </Link>
                </Toolbar>
            </AppBar>
            <br />

            <Welcome />
            <br />
            <UserTable />
            <br />




        </div>

    )
}
