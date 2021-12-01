import { Button } from "bootstrap";
import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
        {/* <Toolbar>
          <Typography variant="title" >
          <img src='.\images\logo.png' width={40} height={40} />
          </Typography>
        </Toolbar> */}
        <NavLink className="navbar-brand float-start" to="/">
          <i>
            <h3>ABC</h3>ComplaintPortal
          </i>
        </NavLink>
        <NavMenu>
          <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="/complaint" activeStyle>
            Complaint
          </NavLink>
          {/* <NavLink to="/engineers" activeStyle>
            Engineer
          </NavLink> */}
          <NavLink to="/products" activeStyle>
            Product
          </NavLink>
          <NavLink to="/admin" activeStyle>
            Admin
          </NavLink>
          <NavLink to="/engineerlist" activeStyle>
           Engineer
          </NavLink>
          <NavLink to="/client" activeStyle>
           Client
          </NavLink>
          <NavLink to="/about" activeStyle>
          About
          </NavLink>
          {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" to="/admin" >Admin</a></li>
            <li><a class="dropdown-item" to="/engineers">Engineer</a></li>
          </ul>
          </li>
          </ul>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
           
          
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/login">Log In</NavBtnLink>
        </NavBtn>
         
        <NavLink to="/register" activeStyle>
            Register
          </NavLink>
      </Nav>
    </>
  );
};

export default Navbar;
