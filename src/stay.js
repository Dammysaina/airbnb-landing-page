import React from 'react';
import './Stay.css'

const Stay = (props) =>{
    return(
        <div className= "stay-container">
            <h2>We may be apart, but we’ll get through <br/> this together.</h2>
            <div className="picture">
                <div className="card">
                    <img src={`/images/lamb.jpg`}/>
                    <div className="card-text">
                        <h3>Online Experiences</h3>
                        <h4></h4>
                    </div>
                </div>
                <div className="card">
                    <img src={'/images/eating.jpg'}/>
                    <div className="card-text">
                        <h3>Monthly Stay</h3>
                        <h4></h4>
                    </div>
                </div>
                <div className="card">
                    <img src={'/images/sheep.jpg'}/>
                    <div className="card-text">
                        <h3>Frontline Stay</h3>
                        <h4></h4>
                    </div>
                </div>
            </div>
        </div>
    )
};



export default Stay;