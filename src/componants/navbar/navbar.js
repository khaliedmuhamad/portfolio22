import React from 'react';
import { Link, Router } from 'react-router-dom';
import LinksDropDown from '../linksDropdown/LinksDropDown';
import "./navbar.css";

const Navbar = () => {
  return (
   
        <nav class="navbar navbar-expand-md navbar-light bg-transparent">
  <div class="container">
    <a class="navbar-brand" href="/" style={{color:"#4E00B4"}}>Khaled</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    
    <div class="collapse navbar-collapse justify-content-start" id="navbarNav">
      <ul class="navbar-nav ms-5 ps-5">
        <li class="nav-item">
          <Link activeClassName="active" className="nav-link" aria-current="page" to="/" >Home</Link>
        </li>
        <li class="nav-item">
          <Link activeClassName="active" className="nav-link" to="/about">about</Link>
        </li>
        <li class="nav-item">
          <Link activeClassName="active" className="nav-link" to="/work">
            
           {<LinksDropDown />} 
            </Link>
        </li>
        <li class="nav-item">
          <Link activeClassName="active" className="nav-link" to="/contact">contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}

export default Navbar;