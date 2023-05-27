import React from 'react'
import { useState } from 'react'

function UserParticipation() {
    const [JsCount,setJsCount]=useState(0)
    const [PyCount,setPyCount]=useState(0)
    const [JavaCount,setJavaCount]=useState(0)
    const [CsCount,setCsCount]=useState(0)
  return (
    <div>
      
      <h3>Answer the Choices Select</h3>
      <button onClick={()=>setJsCount(JsCount+1)}>JavaScript</button> 
      <h2>Total JavaScript Votes: {JsCount}</h2><br />

     

      <button onClick={()=>setPyCount(PyCount+1)}>Python</button>
      <h2>Total Python Votes: {PyCount}</h2> <br />

      <button onClick={()=>setJavaCount(JavaCount+1)}>Java</button>
      <h2>Total Java Votes: {JavaCount}</h2> <br />

      <button onClick={()=>setCsCount(CsCount+1)}>CSharp</button> 
      <h2>Total CSharp Votes: {CsCount}</h2>

      <input type="checkbox" name="JavaScript" title='JavaScript' id="" />

    </div>
  )
}

export default UserParticipation
