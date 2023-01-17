import React from 'react'
import "./Navbar.css"
import Logo from "../assets/pally_logo.png"
import ListIcon from '@mui/icons-material/List';


function Navbar() {
  return (
    <div className='wrapper'>
      <div className='logo-wrapper'><img src={Logo} alt='img' width="64" className='logo' /></div>
      <div><ListIcon/></div>

       

        
    </div>
  )
}

export default Navbar