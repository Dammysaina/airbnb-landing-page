import React from 'react';
import './Footer.css';

const Footer = (props) => {
    return (
        <div className="Footer-container">
            <div className="Footer-flex-container">
            <div>
                <h3>About</h3>
                <p>Diversity & Belonging</p>
                <p>Accessibility</p>
                <p>Trust & Safety</p>
                <p>Airbnb Citizen</p>
                <p>Newsroom</p>
            </div>
            <div>
                <h3>Community</h3>
                <p>Diversity & Belonging</p>
                <p>Accessibility</p>
                <p>Trust & Safety</p>
                <p>Airbnb Citizen</p>
                <p>Newsroom</p>
            </div>
                <div>
                    <h3>Host</h3>
                    <p>Diversity & Belonging</p>
                    <p>Accessibility</p>
                    <p>Trust & Safety</p>
                    <p>Airbnb Citizen</p>
                    <p>Newsroom</p>
                    <p>Accessibility</p>
                </div>
                <div>
                    <h3>Support</h3>
                    <p>Diversity & Belonging</p>
                    <p>Accessibility</p>
                </div>
            </div>
            <hr/>
            <div className="Copyright-flex">
                <div className="Copyright-left-flex">
                <span>© 2020 Airbnb, Inc. All rights reserved</span>
                <span>.Privacy</span>
                <span>.Terms</span>
                <span>.Sitemap</span>
                </div>
                <div className="Copyright-right-flex">
                    <div >
                        <span>English(US)</span>
                        <span>USD</span>
                    </div>
                    
                    <span><img src={`/images/facebook-f-brands.svg`}/></span>
                    <span><img src={`/images/twitter-brands.svg`}/></span>
                    <span><img src={`/images/instagram-square-brands.svg`}/></span>
                    
                </div>
            </div>
        </div>
    )
};

export default Footer;


