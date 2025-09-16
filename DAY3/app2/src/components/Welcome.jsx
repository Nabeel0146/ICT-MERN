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
            <h1>Welcome {b}</h1>
            <TextField variant='outlined' onChange={ChangeName} ></TextField>
            <br />
            <Button variant='contained' onClick={ClickChange}>Change Name</Button>

        </div>
    )
}

export default Welcome