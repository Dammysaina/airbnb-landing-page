import React from 'react';
import './Header.css';
import {Link} from "react-router-dom";

const Header = (props) => {

    return (
        <div className="container">
            <div>
                <img className="logo" src={`/images/logo.png`} alt=""/>
            </div>
            <div>
                <ul>
                    <li>Host a home</li>
                    <li>Host an experience</li>
                    <li>Help</li>
                    <li><Link to="/login">Log in</Link></li>
                    <button><Link to="/signup"> Sign up</Link></button>
                </ul>
            </div>
                
        </div>
    )
};

export default Header;