import React, { useEffect, useState } from 'react';
import { BsFillMoonFill } from 'react-icons/bs';
import { FaSun } from 'react-icons/fa';
import { Link, Router } from 'react-router-dom';
import LinksDropDown from '../linksDropdown/LinksDropDown';
import "./navbar.css";

const Navbar = (props) => {
const [dark, setDark] = useState(false)

useEffect(() => {

props.getDark(dark)

}, [dark])

  return (
   
        <nav className="navbar navbar-expand-md navbar-light bg-transparent" id='mynav'>
  <div className="container">
    <a className="navbar-brand" href="/" style={{color:"#4E00B4"}}>Khaled</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse justify-content-start" id="navbarNav">
      <ul className="navbar-nav ms-5 ps-5">
        <li className="nav-item">
          <Link activeClassName="active" className="nav-link" aria-current="page" to="/" >Home</Link>
        </li>
        <li className="nav-item">
          <Link activeClassName="active" className="nav-link" to="/about">about</Link>
        </li>
        <li className="nav-item">
          <Link activeClassName="active" className="nav-link" to="/work">
            
           {<LinksDropDown />} 
            </Link>
        </li>
        <li className="nav-item">
          <Link activeClassName="active" className="nav-link" to="/contact">contact</Link>
        </li>
      </ul>
    </div>
    <div className={`darkOptions shadow bg-primary ${dark ? "dark": "light"}`} onClick={()=> setDark(!dark)}>
     <span className={`d-inline-block ${dark ? "dark": "light"}`}>
      
</span>
    </div>

  </div>
</nav>

  )
}

export default Navbar;