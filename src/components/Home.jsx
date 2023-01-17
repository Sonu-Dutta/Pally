import React,{useState} from 'react'
import Navbar from './Navbar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import ProjectData from './ProjectData';
import HomeDisplay from './HomeDisplay';



function Home() {


  return (
    <>
    <Router>
    <div className='whole'>
        <div className='navbar-wrapper'><Navbar/></div>

        <Routes>
            <Route path='/home' element={<HomeDisplay/>}/>
            <Route path='/projectdata' element={<ProjectData/>}/>
            {/* <Route path='/' element={}/> */}
            <Route path='/' element={<HomeDisplay/>}/>
          </Routes>






      
        
    </div>
    </Router>
    </>
  )
}

export default Home