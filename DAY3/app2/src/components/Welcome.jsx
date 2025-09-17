import { Button, TextField } from '@mui/material'
import React from 'react'
import { useState } from 'react'

const Welcome = () => {
    var [a, seta] = useState("Full Name")
    var [b, setb] = useState()

    //function
    const ChangeName = (e) => {
        var b = e.target.value
        seta(e.target.value)
    }
    const ClickChange = () => {
        setb(a)
    }
    return (
        <div>
            <br />
            <div style={{  paddingTop:"20px",borderRadius:"20px",backgroundImage:"url(https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)", height:"200px", backgroundSize:"cover", backgroundPosition:"center"}}>

            </div>
            <h1 style={{ textAlign:"left", fontSize:"90px"}}>Welcome {b}</h1>

            <h3 
                style={{textAlign:"left", fontSize:"14px"}}
            >Welcome to the react new webpage, explorers find gems,aah.</h3>
            <div style={{textAlign:"left"}}>
            <TextField  
                style={{textAlign:"left"}} label='Enter Full Name'
                variant='outlined' onChange={ChangeName} ></TextField>
                </div>
            <br className='space'/>
            <Button variant='contained' onClick={ClickChange}>Change Name</Button>

        </div>
    )
}

export default Welcome