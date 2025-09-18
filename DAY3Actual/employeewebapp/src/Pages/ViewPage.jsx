import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const ViewPage = () => {

 
    var [emp, setEmp] = useState([])
    axios.get("http://localhost:3000/view")
      .then((res) => {
        setEmp(res.data)
      })

    const ddelete=(id)=>{
      axios.delete(`http://localhost:3000/remove/${id}`)
    }
    

    return (
      <div><h1>View Data</h1>
        <TableContainer>
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
                  <TableCell>{val.Age}</TableCell>
                  <TableCell>{val.Dept}</TableCell>
                  <TableCell>
                    <Button variant='contained' color='error' onClick={()=> ddelete(val._id)}>Delete</Button>
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
