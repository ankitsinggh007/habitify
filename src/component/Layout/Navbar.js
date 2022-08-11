import React from 'react';
import {Link} from "react-router-dom"
import Logo from "../images/Logo.svg";
import classes from "./Navbar.module.css"
function Navbar() {
  return (
    <div className={classes.navBar}>
        <Link className={classes.logo} to="/">
            <img src={Logo} alt={classes.logo}/>
            <div>Habitify</div>
        </Link>

        <div className={classes.navList}>
            <div>Contact Us</div>
        <div>Blogs</div>
        <div>Sign In</div>
        <div>Sign Up</div></div>
    </div>
  )
}

export default Navbar