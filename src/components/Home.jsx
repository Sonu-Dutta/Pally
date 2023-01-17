import React from 'react'
import Navbar from './Navbar'
import Menu from './Menu'


function Home() {
  return (
    <>
    <div className='whole'>
        <div className='navbar-wrapper'><Navbar/></div>
        <div className='menu-wrapper'><Menu/></div>
    </div>
    </>
  )
}

export default Home