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

      
      
      <input type="checkbox" id="one" name="checkbox" onSelect={()=>{const checkbox = document.getElementById('one')

checkbox.addEventListener('change', (event) => {
  if (event.currentTarget.checked) {
    JsCount=setJsCount(prevCount=>prevCount+1)
  } else {
    alert('not checked');
  }
})}} />
      <label for="one">JavaScript</label>
      <h2>Total JavaScript Votes: {JsCount}</h2><br />

     
      <input type="checkbox" id="two" name="checkbox" onSelect={()=>{const checkbox = document.getElementById('two')

checkbox.addEventListener('change', (event) => {
  if (event.currentTarget.checked) {
    PyCount=setPyCount(prevCount=>prevCount+1)
  } else {
    alert('not checked');
  }
})}} />
      <label for="two">Python</label>
      <h2>Total Python Votes: {PyCount}</h2> <br />



      <input type="checkbox" id="three" name="checkbox" onSelect={()=>{const checkbox = document.getElementById('three')

checkbox.addEventListener('change', (event) => {
  if (event.currentTarget.checked) {
    JavaCount=setJavaCount(prevCount=>prevCount+1)
  } else {
    alert('not checked');
  }
})}} />
      <label for="three">Java</label>
      <h2>Total Java Votes: {JavaCount}</h2> <br />

      
      <input type="checkbox" id="four" name="checkbox" onSelect={()=>{const checkbox = document.getElementById('three')

checkbox.addEventListener('change', (event) => {
  if (event.currentTarget.checked) {
    CsCount=setCsCount(prevCount=>prevCount+1)
  } else {
    alert('not checked');
  }
})}} />
      <label for="four">CSharp</label>
      <h2>Total CSharp Votes: {CsCount}</h2>
      

      

    </div>
  )
}

export default UserParticipation
