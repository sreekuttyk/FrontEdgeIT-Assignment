import React from 'react';
import "./Header.css";
import logo from "../Screen/logo.jpg";
import {Link} from 'react-router-dom';
function Header() {
     return (
        <div className="header">
            <img className="logo"src={logo} alt="logo"></img>
            <nav className="nav">    
                <Link  className="navlink" to="/dishes">Dishes</Link>
                 <Link className="navlink" to="/sports">Sports</Link>
            </nav>
        </div>
    )
}

export default Header
