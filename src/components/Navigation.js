import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
    return (
        <nav>
            <div className="site-title">ROOM TRACKER</div>
            <NavLink to="/" end>HOME</NavLink>
            <NavLink to="/sets">SETS</NavLink>
            <NavLink to="/rooms">ROOMS</NavLink>
        </nav>
    )
}

export default Navigation;