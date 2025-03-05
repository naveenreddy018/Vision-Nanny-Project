import React, { useState } from 'react'
import "./toggle.css"

function Toggle({status}) {
    const [toggle,settoggle] = useState(true)
    const change1 = ()=>{
        settoggle(prev  => !prev)
    }

  
  return (
    <div className={`togglebtn ${toggle ? "back" : ""}`}>
       <div onClick={ ()=>{
        change1(),
        status(toggle)
       } }  className={`thumb ${toggle ? "thumb1 ": " "}`}></div>
    </div>
  )
}

export default Toggle
