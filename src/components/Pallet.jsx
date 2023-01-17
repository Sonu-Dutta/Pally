import React, { useState } from 'react'
import './Project.css'
import productImg from '../assets/product.png'
import TextField from '@mui/material/TextField'
import Switch from '@mui/material/Switch';
// import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const Pallet = () => {
   const [data, setData]=useState({
    standardPallet:"standardPallet",
    length:"length",
      width:"width",
      height:"height",
      layers:"layers",
      palletLoadHeight:"palletLoadHeight"
   })
   console.log(data)
  return (
    <div className='project-main'>
        <h1> Pallet</h1>

        <div className='content'>
     <div className='left'>
       <form className='inp-form'>
       <TextField id="filled-basic" onChange={(e)=>(setData((data)=>{return{...data,standardPallet:e.target.value}}))} label="Standard pallet:" variant="filled" />
      <p>Optional: Choose a standard pallet
</p>
        <div className='inner-inp'><TextField id="filled-basic" onChange={(e)=>(setData((data)=>{return{...data,length:e.target.value}}))} label="Length" variant="filled" />
       <TextField id="filled-basic" onChange={(e)=>(setData((data)=>{return{...data,width:e.target.value}}))} label="Width:" variant="filled" />
       <TextField id="filled-basic" onChange={(e)=>(setData((data)=>{return{...data,height:e.target.value}}))} label="Height:" variant="filled" />
       </div>
       <TextField id="filled-basic" onChange={(e)=>(setData((data)=>{return{...data,layers:e.target.value}}))} label="Layers:" variant="filled" />
       <p>Total no. of layers
</p>
<TextField id="filled-basic" onChange={(e)=>(setData((data)=>{return{...data,palletLoadHeight:e.target.value}}))} label="Pallet load height:" variant="filled" />
       <p>Pallet load height when finished

</p>
       <FormControlLabel control={<Switch defaultChecked />} label="Pallet overhang" />

       </form>
     </div>
     <div className='right'>
        <img src={productImg} alt="" height={200} width={200} />
        <p>Pallet dimensions</p>
     </div>
     </div>
    </div>
  )
}
export default Pallet
