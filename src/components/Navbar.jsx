import React from "react";
import "./Navbar.css";
import Logo from "../assets/pally_logo.png";
import ListIcon from "@mui/icons-material/List";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import LayersIcon from "@mui/icons-material/Layers";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <List
        subheader={
          <ListSubheader component="div" className="logo-wrapper">
            <Link to="/home">
              <img src={Logo} alt="img" width="64" className="logo" />
            </Link>
          </ListSubheader>
        }
      >
        <Link to="/projectdata">
          <ListItemButton className="navicon">
            <ListItemIcon className="icon-parent">
              <ListIcon />
            </ListItemIcon>
          </ListItemButton>
        </Link>

        <Link to="/pallet">
          <ListItemButton className="navicon">
            <ListItemIcon className="icon-parent">
              <LayersIcon />
            </ListItemIcon>
          </ListItemButton>
        </Link>
      </List>
      {/* <div className='wrapper'>
      <div className='logo-wrapper'><img src={Logo} alt='img' width="64" className='logo' /></div>
      <div className='navicon' ></div>
      <div className='navicon' ><ListIcon/></div>

       

        
    </div> */}
    </>
  );
}

export default Navbar;
