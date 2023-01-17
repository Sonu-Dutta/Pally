import React,{useState} from 'react'
import Navbar from './Navbar'
import Menu from './Menu'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Project from './Project';
import Product from './Product';
import Pallet from './Pallet';
import Palletizing from './Palletizing';


function Home() {
  const [show,setShow]=useState("project")


  return (
    <>
    <Router>
    <div className='whole'>
        <div className='navbar-wrapper'><Navbar/></div>
      
        <div className='menu-wrapper' ><Menu setShow={setShow}/></div>
        <div>

          {show ==="project" ?<Project/>:(show==="product"?<Product/>:(show==="pallet"?<Pallet/>:(show==="palletizing"?<Palletizing/>:<></>)))}

          {/* <Routes>
            <Route path='/' element={}/>
            <Route path='/' element={}/>
            <Route path='/' element={}/>
            <Route path='/' element={}/>
          </Routes> */}

        </div>
    </div>
    </Router>
    </>
  )
}

export default Home