import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Menu({setShow}) {
  return (
    <div >
        <div className='menu-heading'>
            Project data
        </div>
        <div>
          <div className='menu-list'>
          <div  onClick={()=>{setShow("project")}} >Project </div>
          <div  ><ArrowForwardIosIcon className='arrow' /> </div>
          </div>

          <div className='menu-list'>
          <div  onClick={()=>{setShow("product")}}>Product  </div>
          <div  ><ArrowForwardIosIcon className='arrow' /> </div>
          </div>
          <div className='menu-list'>
          <div  onClick={()=>{setShow("pallet")}}>Pallet </div>
          <div  ><ArrowForwardIosIcon className='arrow' /> </div>
          </div><div className='menu-list'>
          <div onClick={()=>{setShow("palletizing")}}>Palletizing  </div>
          <div  ><ArrowForwardIosIcon className='arrow'/> </div>
          </div>
        </div>
    </div>
  )
}

export default Menu