import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import Navbar from '../Components/navbar'
import Colourbar from '../Components/Colourbar'
import { useLocation, useNavigate } from 'react-router-dom'

const ViewPage = () => {

    
    var navigate=useNavigate()
    var [emp, setEmp] = useState([])
    axios.get("http://localhost:3000/view")
      .then((res) => {
        setEmp(res.data)
      })

    const ddelete=(id)=>{
      axios.delete(`http://localhost:3000/remove/${id}`)
    }

    const updatef=(val)=>{
      navigate( '/update', {val})
    }
    

    return (
      
      <div>
        <Navbar/>
        <h1 style={{paddingTop:"80px"}}></h1>
        <Colourbar color="#f7cac9ff" />
        <h1 style={{ textAlign: "left", fontSize: "80px", paddingTop:"10px"}}>View Data</h1>
        
        <h3 style={{textAlign:"left"}}>View added details of employee here</h3>
        <br />
        <TableContainer >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Full Name</TableCell>
                <TableCell>Department</TableCell>
                <TableCell>Salary</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {emp.map((val) => (
                <TableRow key={val._id}>
                  <TableCell>{val.Name}</TableCell>
                  <TableCell>{val.Dept}</TableCell>
                  <TableCell>{val.Salary}</TableCell>
                  <TableCell>
                    <Button variant='contained' color='error' onClick={()=> ddelete(val._id)}>Delete</Button>&nbsp;
                     <Button variant='contained' color='primary' onClick={()=> updatef(val)}>Update</Button>
                  </TableCell>
                </TableRow>)
              )}
              
            </TableBody>
          </Table>
        </TableContainer>



      </div>
    )
  }

  export default ViewPage
