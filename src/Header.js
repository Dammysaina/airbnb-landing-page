import React from 'react';
import './Header.css';


const Header = (props) => {
    return (
        <div className="container">
            <div>
                <img className="logo" src={`/images/logo.png`}/>
            </div>
            <div>
                <ul>
                    <li>Host a home</li>
                    <li>Host an experience</li>
                    <li>Help</li>
                    <li>Log in</li>
                    <button>Sign up</button>
                </ul>
            </div>
                
        </div>
    )
};

export default Header;