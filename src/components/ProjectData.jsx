import React,{useState} from 'react'
import Project from './Project';
import Product from './Product';
import Pallet from './Pallet';
import Palletizing from './Palletizing';
import Menu from './Menu'


function ProjectData() {
    const [show,setShow]=useState("project")

  return (
    <div className='whole'>
        <div className='menu-wrapper' ><Menu setShow={setShow}/></div>
    <div>

      {show ==="project" ?<Project/>:(show==="product"?<Product/>:(show==="pallet"?<Pallet/>:(show==="palletizing"?<Palletizing/>:<></>)))}

      

    </div>
    </div>
  )
}

export default ProjectData