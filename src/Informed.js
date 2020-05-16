import React from 'react';
import './Informed.css';

const Informed = (props) => {
    return (
        <div className="info">
            <div className= "stay">
                <h3>Stay Informed</h3>
            </div>
            <div className="info-four-list">
                <div>
                    <h4>For Guests</h4>
                    <h3>Updates for travel</h3>
                    <p>What you should know</p>
                    <h3>Cancellation options</h3>
                    <p>Learn what’s covered</p>
                    <h3>Help Center</h3>
                    <p>Get support</p>
                </div>
                <div>
                    <h4>For hosts</h4>
                    <h3>Message from Brian Chesky</h3>
                    <p>Hear from our CEO</p>
                    <h3>Resources for hosting</h3>
                    <p>What’s impacted by COVID-19</p>
                    <h3>Providing frontline stays</h3>
                    <p>Learn how to help</p>
                </div>
                <div>
                    <h4>For COVID-19 responders</h4>
                    <h3>Frontline stays</h3>
                    <p>Learn about our program</p>
                    <h3>Sign up</h3>
                    <p>Check for housing options</p>
                    <h3>Make a donation</h3>
                    <p>Support nonprofit organizations</p>
                </div>
                <div>
                    <h4>More</h4>
                    <h3>Airbnb Newsroom</h3>
                    <p>Latest announcements</p>
                    <h3>World Health Organization</h3>
                    <p>Education and updates</p>
                    
                </div>
            </div>
        </div>
    )
};

export default Informed;
