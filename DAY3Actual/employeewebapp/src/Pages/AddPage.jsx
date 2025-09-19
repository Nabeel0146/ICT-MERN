import React, { useEffect, useState } from 'react'
import Colourbar from '../Components/Colourbar'
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material'
import axios from 'axios'
import Navbar from '../Components/navbar'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'

const AddPage = () => {

    console.log(location.state)
    const inputHandler=(e)=>{

        setinput({...input,[e.target.name]:e.target.value})
        console.log(input)
    }

    const handleSubmit=()=>{
        setSubmit(input)
        console.log(submit)

        axios.post("http://localhost:3000/add",input)
        .then((res)=>{
            console.log(res.data)
            console.log("Data added successfully")
            setinput({Name:"", Dept:"", Salary:""})
            navigate('/viewpage')

        }
    )
    }

    useEffect(() => {
  if (location.state) {
    setinput({
      Name: location.state.Name || "",
      Dept: location.state.Dept || "",
      Salary: location.state.Salary || "",
    });
  }
}, [location.state])
    
    
    var location=useLocation()
    var navigate=useNavigate()
    var [submit, setSubmit]=useState({})
    var [input, setinput]=useState({Name:"", Dept:"", Salary:""})


    return (
        <div>
            <Navbar/>
            <h1 style={{paddingTop:"80px"}}></h1>
            <Colourbar color="#acd6f3ff" /> 
            <h1 style={{ textAlign: "left", fontSize: "80px" }}>Add Employee details</h1>
            <h3
                style={{ textAlign: "left", fontSize: "14px" }}
            >Welcome to the react new webpage, explorers find gems,aah.</h3>
            <div style={{ textAlign: "left" }}>
                <TextField style={{ textAlign: "left" }}
                 label="Full Name"
                 name='Name'
                 value={input.Name}
                  onChange={inputHandler} >
                  </TextField> &nbsp;


                <TextField style={{ textAlign: "left" }}
                 label="Department"
                 name='Dept'
                 value={input.Dept}
                  onChange={inputHandler}>
                    </TextField> &nbsp;


                <TextField style={{ textAlign: "left" }}
                 label="Salary" 
                 name='Salary'
                 value={input.Salary}
                 onChange={inputHandler}>

                 </TextField>

            </div>
            <div style={{ textAlign: "left", paddingTop:"19px"}}>
                <Button variant='contained' onClick={handleSubmit}>Submit</Button>

            </div>
            
        </div>
    )
}

export default AddPage