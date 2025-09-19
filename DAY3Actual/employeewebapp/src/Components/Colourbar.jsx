import React from 'react'

const Colourbar = ({ color = "#8fcabbff" }) => {
  return (
    <div
      style={{
        paddingTop: "160px",
        paddingBottom: "20px",
        backgroundColor: color,   
        borderRadius: "10px"
      }}
    ></div>
  )
}

export default Colourbar