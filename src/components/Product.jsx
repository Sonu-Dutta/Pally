import React, { useState } from 'react'
import './Project.css'
import productImg from '../assets/product.png'
import TextField from '@mui/material/TextField'
import Switch from '@mui/material/Switch';
// import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const Product = () => {
   const [data, setData]=useState({length:"length",
      width:"width",
      height:"height",
      weight:"weight"
   })
   console.log(data)
  return (
    <div className='project-main'>
        <h1> Product</h1>

        <div className='content'>
     <div className='left'>
       <form className='inp-form'>
       <TextField id="filled-basic" onChange={(e)=>(setData((data)=>{return{...data,length:e.target.value}}))} label="Length:" variant="filled" />
       <TextField id="filled-basic" onChange={(e)=>(setData((data)=>{return{...data,width:e.target.value}}))} label="Width:" variant="filled" />
       <TextField id="filled-basic" onChange={(e)=>(setData((data)=>{return{...data,height:e.target.value}}))} label="Height:" variant="filled" />
       <TextField id="filled-basic" onChange={(e)=>(setData((data)=>{return{...data,weight:e.target.value}}))} label="Weight:" variant="filled" />
       <FormControlLabel control={<Switch defaultChecked />} label="Label orientation" />
       <p>(Only use if the label has relevance for the pallet pattern)</p>
       </form>
     </div>
     <div className='right'>
        <img src={productImg} alt="" />
        <p>Product dimensions</p>
     </div>
     </div>
    </div>
  )
}

export default Product
