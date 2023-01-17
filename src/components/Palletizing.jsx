import React, { useState } from 'react'
import './Project.css'
import palletImg from '../assets/palletizing.png'
import TextField from '@mui/material/TextField'

const Palletizing = () => {
   const [data, setData]=useState({
      grip:"grip",
      boxPad:"boxPad"
   })
   console.log(data)
  return (
    <div className='project-main'>
        <h1> Palletizing</h1>

        <div className='content'>
     <div className='left'>
       <form className='inp-form'>
       <TextField id="filled-basic" onChange={(e)=>(setData((data)=>{return{...data,grip:e.target.value}}))} label="Max grip:" variant="filled" />
       <p>
The max number of products that can be lifted at once
</p>
       <TextField id="filled-basic" onChange={(e)=>(setData((data)=>{return{...data,boxPad:e.target.value}}))} label="Box padding:" variant="filled" />
       <p>Free space between products</p>
       </form>
     </div>
     <div className='right'>
        <img src={palletImg} alt="" width={100} height={100} />
        <p>Box Padding</p>
     </div>
     </div>
    </div>
  )
}

export default Palletizing
