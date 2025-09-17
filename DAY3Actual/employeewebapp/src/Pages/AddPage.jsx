import React, { useState } from 'react'
import Colourbar from '../Components/Colourbar'
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material'

const AddPage = () => {

    var [name, setName]=useState("FF")
    var [dept, setDept]=useState("FF")
    var [salary, setSalary]=useState("FF")

    const [submittedName, setSubmittedName]=useState("")

    const ChangeName=(e)=>{
        setName(e.target.value)
    }
    const FixName=()=>{
        setName2(name)
    }



    
    const ChangeDept=(e)=>{
        setDept(e.target.value)
    }
    
    const ChangeSalary=(e)=>{
        setSalary(e.target.value)
    }

    


    return (
        <div>
            <Colourbar />
            <h1 style={{ textAlign: "left", fontSize: "80px" }}>Add Employee details</h1>
            <h3
                style={{ textAlign: "left", fontSize: "14px" }}
            >Welcome to the react new webpage, explorers find gems,aah.</h3>
            <div style={{ textAlign: "left" }}>
                <TextField style={{ textAlign: "left" }} label="Full Name" onChange={ChangeName} ></TextField> &nbsp;
                <TextField style={{ textAlign: "left" }} label="Department" onChange={ChangeDept}></TextField> &nbsp;
                <TextField style={{ textAlign: "left" }} label="Salary" onChange={ChangeSalary}></TextField>
            </div>
            <div style={{ textAlign: "left", paddingTop:"19px"}}>
                <Button variant='contained' onClick={FixName}>Submit</Button>

            </div>
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
                        <TableRow>
                            <TableCell>{name}</TableCell>
                            <TableCell>{dept}</TableCell>
                            <TableCell>{salary}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    )
}

export default AddPage