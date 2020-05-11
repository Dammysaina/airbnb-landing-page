import React from 'react';
import './Informed.css';

const Informed = (props) => {
    return (
        <div className="info">
            <div className= "stay">
                <h3>Stay Informed</h3>
            </div>
            <div className="info-four-list">
                <ul>
                    <li>For guests</li> <br/>
                    <li>Updates for travel<p> What you should know</p></li>
                    <li>Cancellation options<p>Learn what’s covered</p></li>
                    <li> Help Center<p>Get support</p></li>
                </ul>
                <ul>
                    <li> For hosts</li> <br/>
                    <li>Message from Brian Chesky<p>Hear from our CEO</p></li>
                    <li>Resources for hosting<p>What’s impacted by COVID-19</p></li>
                    <li>Providing frontline stays<p>Learn how to help</p></li>
                </ul>
                <ul>
                    <li>For COVID-19 responders</li> <br/>
                    <li>Frontline stays<p>Learn about our program</p></li>
                    <li>Sign up<p>Check for housing options</p></li>
                    <li>Make a donation<p>Support nonprofit organizations</p></li>
                </ul>
                <ul>
                    <li>More</li> <br/>
                    <li>Airbnb Newsroom<p>Latest announcements</p></li>
                    <li>World Health Organization<p>Education and updates</p></li>
                </ul>
            </div>

        </div>
    )
};

export default Informed;
