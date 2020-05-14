import React from 'react';
import './Footer.css';

const Footer = (props) => {
    return (
        <div className="Footer-container">
            <div className="Footer-flex-container">
            <div>
                <h4 style={{color: props.myColor}}>About</h4>
                <p>Diversity & Belonging</p>
                <p>Accessibility</p>
                <p>Trust & Safety</p>
                <p>Airbnb Citizen</p>
                <p>Newsroom</p>
            </div>
            <div>
                <h4>Community</h4>
                <p>Diversity & Belonging</p>
                <p>Accessibility</p>
                <p>Trust & Safety</p>
                <p>Airbnb Citizen</p>
                <p>Newsroom</p>
            </div>
                <div>
                    <h4>Host</h4>
                    <p>Diversity & Belonging</p>
                    <p>Accessibility</p>
                    <p>Trust & Safety</p>
                    <p>Airbnb Citizen</p>
                    <p>Newsroom</p>
                    <p>Accessibility</p>
                </div>
                <div>
                    <h4>Support</h4>
                    <p>Diversity & Belonging</p>
                    <p>Accessibility</p>
                </div>
            </div>
            {/* <hr/> */}
            <div className="Copyright-flex">
                <div className="Copyright-left-flex">
                <span>© 2020 Airbnb, Inc. All rights reserved</span>
                <span>.Privacy</span>
                <span>.Terms</span>
                <span>.Sitemap</span>
                </div>
                <div className="Copyright-right-flex">
                    <div className="Copyright-right-flex-country">
                        <span>English(US)</span>
                        <span>USD</span>
                    </div>
                    <div className="Copyright-right-flex-socialmedia">
                        <span><img src={`/images/facebook-f-brands.svg`}/></span>
                        <span><img src={`/images/twitter-brands.svg`}/></span>
                        <span><img src={`/images/instagram-square-brands.svg`}/></span>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Footer;


