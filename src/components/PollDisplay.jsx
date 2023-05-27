import React, { useState } from 'react'


function PollDisplay() {
    const [JsCount,setJsCount]=useState(0)
    const [PyCount,setPyCount]=useState(0)
    const [JavaCount,setJavaCount]=useState(0)
    const [CsCount,setCsCount]=useState(0)
  return (
    <div>
      <h1>What is your favorite programming language?</h1>
      <h3>Answer the Choices Select</h3>
      <button>JavaScript</button> 
      <h2>Total JavaScript Votes: X</h2><br />
      <button>Python</button>
      <h2>Total Python Votes: X</h2> <br />
      <button>Java</button>
      <h2>Total Java Votes: X</h2> <br />
      <button>CSharp</button> 
      <h2>Total CSharp Votes: X</h2>
    </div>
  )
}

export default PollDisplay
