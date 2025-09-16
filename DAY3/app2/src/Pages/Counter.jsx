import { Button } from '@mui/material'
import React from 'react'
import { useState } from 'react'

const Counter = () => {
    var [num, setnum] = useState(0)
    const Adder = () => {
        setnum(num+1)
    }

    const Subr = () => {
        setnum(num-1)
    }

    const Add2 = () => {
        setnum(num+2)
    }
    
  return (
      <div>
          <h1>{num}</h1>
          <div>
              <Button variant='contained' onMouseEnter={Subr} onMouseLeave={Subr} size='small 'color='error'>-1</Button> &nbsp;
              <Button variant='contained' onClick={Adder} csize="medium" color='success'>+1</Button> &nbsp;
              <Button variant='contained' onClick={Add2} color='secondary'>+2</Button>
          </div>
          
    </div>
  )
}

export default Counter