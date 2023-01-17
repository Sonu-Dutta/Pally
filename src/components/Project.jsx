import React, { useState } from 'react'
import './Project.css'
import projectImg from '../assets/project.png'
import TextField from '@mui/material/TextField'

const Project = () => {
   const [data, setData]=useState({
      name:"name",
      desc:"desc"
   })
   console.log(data)
  return (
    <div className='project-main'>
        <h1> Project</h1>

        <div className='content'>
     <div className='left'>
       <form className='inp-form'>
       <TextField id="filled-basic" onChange={(e)=>(setData((data)=>{return{...data,name:e.target.value}}))} label="Name:" variant="filled" />
       <TextField id="filled-basic" onChange={(e)=>(setData((data)=>{return{...data,desc:e.target.value}}))} label="Description:" variant="filled" />
       <p>Will be shown when choosing a pattern on the robot
</p>
       </form>
     </div>
     <div className='right'>
        <img src={projectImg} alt="" />
     </div>
     </div>
    </div>
  )
}

export default Project
