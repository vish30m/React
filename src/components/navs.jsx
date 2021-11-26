import { Button } from 'bootstrap';
import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

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
        <NavLink className="navbar-brand float-start" to="/"><i><h3>ABC</h3>ComplaintPortal</i></NavLink>
		<NavMenu>
		<NavLink to='/' activeStyle>
			Home
		</NavLink>
		<NavLink to='/complaint' activeStyle>
			complaint
		
		
		</NavLink>
		<NavLink to='/engineer' activeStyle>
			Engineer
		</NavLink>
		<NavLink to='/' activeStyle>
			Products
		</NavLink>
		<NavLink to='/' activeStyle>
			About
		</NavLink>
		<NavLink to='/' activeStyle>
			Contact Us
		</NavLink>
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
       
                  
       
		</NavMenu>
        <NavBtn >
		<NavBtnLink to='/login'>Log In</NavBtnLink>
		</NavBtn>
		
       
        
               
	</Nav>
	</>
);
};

export default Navbar;
