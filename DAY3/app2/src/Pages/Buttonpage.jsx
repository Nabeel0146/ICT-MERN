import { Button } from '@mui/material'
import React from 'react'
import { useState } from 'react'

const Buttonpage = () => {
    var [a, setname] = useState("Click A button see something!")
    const Cname = (n) => {
        setname(n)
    }
    return (
        <div >
            <h3>{a}</h3>

            <Button variant='contained' onClick={() => Cname("Button 1 clicked")}>Button 1</Button>&nbsp;
            <Button variant='contained' onClick={() => Cname("Button 2 clicked")}>Button 2</Button>&nbsp;
            <Button variant='contained' onClick={() => Cname("Button 3 clicked")}>Button 3</Button>

        </div>
    )
}

export default Buttonpage