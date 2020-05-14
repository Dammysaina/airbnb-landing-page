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
                    <p>Updates for travel</p>
                    <p>What you should know</p>
                    <p>Cancellation options</p>
                    <p>Learn what’s covered</p>
                    <p>Help Center</p>
                    <p>Get support</p>
                </div>
                <div>
                    <h4>For hosts</h4>
                    <p>Message from Brian Chesky</p>
                    <p>Hear from our CEO</p>
                    <p>Resources for hosting</p>
                    <p>What’s impacted by COVID-19</p>
                    <p>Providing frontline stays</p>
                    <p>Learn how to help</p>
                </div>
                <div>
                    <h4>For COVID-19 responders</h4>
                    <p>Frontline stays</p>
                    <p>Learn about our program</p>
                    <p>Sign up</p>
                    <p>Check for housing options</p>
                    <p>Make a donation</p>
                    <p>Support nonprofit organizations</p>
                </div>
                <div>
                    <h4>More</h4>
                    <p>Airbnb Newsroom</p>
                    <p>Latest announcements</p>
                    <p>World Health Organization</p>
                    <p>Education and updates</p>
                    <p></p>
                    <p></p>
                </div>
            </div>
        </div>
    )
};

export default Informed;
