import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

import LinksDropDown from "../linksDropdown/LinksDropDown";
import "./navbar.css";
import Anochor from "../Anochor/Anochor";

const Navbar = (props) => {
  const [dark, setDark] = useState(false);
  const [stuts, sestuts] = useState(false);

  useEffect(() => {
    props.getDark(dark);
  }, [props, dark]);

  return (
    <nav
      className="navbar navbar-expand-md navbar-light bg-transparent"
      id="mynav"
    >
      <div className="container">
        <Anochor className="navbar-brand " href="/" style={{ color: "#4E00B4" }}>
          Khaled
        </Anochor>
        <button
          className="navbar-toggler hamburger"
          onClick={() => {
            sestuts(!stuts);
          }}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          {!stuts ? <GiHamburgerMenu /> : <AiOutlineClose />}
        </button>

        <div
          className={`darkOptions shadow bg-primary ${
            dark ? "dark" : "light"
          } order-md-3`}
          onClick={() => setDark(!dark)}
        >
          <span className={`d-inline-block ${dark ? "dark" : "light"}`}></span>
        </div>
        <div
          className="collapse navbar-collapse justify-content-start  "
          id="navbarNav"
        >
          <ul className="navbar-nav ms-5 ps-5">
            <li className="nav-item">
              <NavLink className="nav-link " aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                about
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/work">
                {<LinksDropDown />}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
