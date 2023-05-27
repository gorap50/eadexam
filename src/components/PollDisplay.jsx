import React, { useState } from 'react'


function PollDisplay() {

    const [Question,setQuestion]=useState({Question1:""})
   
  return (
    <div>
     
<input type="text" value={Question.Question1} onChange={e=>setQuestion({...Question,Question1:e.target.value})} />
<h2> {Question.Question1}</h2>



{/* <h2>{JSON.stringify(Question)}</h2> */}




    </div>
  )
}

export default PollDisplay
