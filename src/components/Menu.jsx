import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Menu({setShow}) {
  return (
    <div >
        <div className='menu-heading'>
            Project data
        </div>
        <div>
          <div className='menu-list' onClick={()=>{setShow("project")}} >Project <span className='arrow' ><ArrowForwardIosIcon/> </span></div>
          <div className='menu-list' onClick={()=>{setShow("product")}}>Product <span className='arrow'><ArrowForwardIosIcon/></span> </div>
          <div className='menu-list' onClick={()=>{setShow("pallet")}}>Pallet <span className='arrow'><ArrowForwardIosIcon/> </span></div>
          <div className='menu-list' onClick={()=>{setShow("palletizing")}}>Palletizing <span className='arrow'><ArrowForwardIosIcon/></span> </div>
        </div>
    </div>
  )
}

export default Menu