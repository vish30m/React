import React, { Component } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
class Nav extends React.Component {
  
 
    
   
  
  render() {
    return (
      <div>
       <nav className="navbar  navbar-expand-lg navbar-light bg-info" >
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">ABC-ComplaintPortal</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
        <li className="nav-item">
          <NavLink className="nav-link active" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link ml-2" to="/complaint">Complaint</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link ml-2" to="/engineer">Engineer</NavLink>
        </li>

        
       
      </ul>
     
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link " to="/login">
                    Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link " to="/cform">
                    Register
                  </NavLink>
                </li>
                
              </ul>
    </div>
  </div>
</nav>
      </div>
    );
  }
}

export default Nav;
