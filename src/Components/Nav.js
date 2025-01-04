import React from "react";
import { NavLink } from "react-router";
import "../css/style.css";
function Nav() {
    return (
        <div>
        <nav className="nav">
            <NavLink to ="/" style={{color:"white", fontSize:"2rem", alignItems:"start"}}>Flavo</NavLink>
    <NavLink to="/home">Home</NavLink>
    <NavLink to="/login">Login</NavLink>
    <NavLink to="/signup">SignUp</NavLink>
    <NavLink to="/profile">Profile</NavLink>
            </nav>
   
        </div>
    );
}

export default Nav;