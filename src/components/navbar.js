import React, {useState} from 'react'
import Logo from "../assets/pizzaLogo.png";
import {Link} from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {
  const [links, sethiddenlinks]= useState(false);
  const uselinks= ()=>{
    sethiddenlinks(!links);
  };

  return (
    <div className="navbar">
        <div className="leftside" id={links? "open": "close"}>
            <img src={Logo} alt=""/>
            <div className="hiddenlinks">
              <Link to="/">Home</Link>
              <Link to="/menu">Menu</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
            </div>
        </div>
        <div className="rightside">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="button">
          <button onClick={uselinks}> 
            <ReorderIcon/>
          </button>
        </div>
    </div>
  )
}

export default Navbar;
