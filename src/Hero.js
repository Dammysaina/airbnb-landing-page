import React from 'react';
import './Hero.css';

const Hero =(props) => {
    return(
        <div className="hero">
            <div className="host">
                <h1>Host a hero: help us house frontline responders around the world</h1>
                <button>Get involved</button>
            </div>
            <div className="frontline">
                <h3>With frontline stays, Airbnb is partnering with our hosts to connect 100,000 healthcare providers, relief workers, 
                    and first responders with places to stay that allow them to be close to their patients - and safely distanced from their own families.
                </h3>
            </div>
        </div>
    )
};

export default Hero;
