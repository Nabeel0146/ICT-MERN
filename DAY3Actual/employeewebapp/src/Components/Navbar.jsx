import React from 'react'
import { AppBar, Button, Table, TableCell, TableContainer, TableHead, TableRow, Toolbar } from '@mui/material'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <AppBar sx={{ bgcolor: '#324730ff' , paddingRight:"200px"}} position="fixed">
        <Toolbar>
          <h1 className='appbarh1'>Employeez</h1>
          <Link to="/addpage" >
            <Button variant="text" size='2' color='primary'>Add Employee</Button>

          </Link>&nbsp;
          <Link to="/viewpage" >
            <Button variant="text" size='2'>View Employee</Button>

          </Link>&nbsp;


        </Toolbar>

      </AppBar>
    </div>
  )
}

export default Navbar