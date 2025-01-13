import React from "react";
import { NavLink } from "react-router";
import "../css/style.css";
function Nav() {
    return (
        <div>
            <nav className="logo">
    <NavLink  style={{color:"white", fontSize:"2rem", alignItems:"start"}}>Flavo</NavLink>
    </nav>
        <nav className="nav">
    <NavLink to="/home">Home</NavLink>
    <NavLink to="/cuisines">Cuisines</NavLink>
    <NavLink to="/restaurants">Restaurants</NavLink>
    <NavLink to="/dishes">Dishes</NavLink>
    <NavLink to="/profile">Profile</NavLink>
            </nav>
        </div>
    );
}

export default Nav;