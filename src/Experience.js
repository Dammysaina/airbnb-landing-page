import React from 'react';
import './Experience.css';

const Experience = (props) =>{
    return(
        <div className= "experience-container">
            <div className="experience-explore">
            <div className= "experience-explore-text">
                <h1>Introducing Online Experience</h1>
                <h4>Duis esse labore reprehenderit cillum velit cillum nulla id id labore.
                    Duis esse labore reprehenderit cillum velit cillum nulla id id labore.
                </h4>
            </div>
            <div className="experience-button">
                <button>Explore all</button>
            </div>
            </div>
            <div className="grid">
                <div className="card1 grid-text">
                <img src= {`/images/lamb.jpg`}/>
                <div className="grid-text">
                    <h3>Mix secret sangria with Pedro from&nbsp;Lisbon
                    </h3>
                </div>
                </div>
                <div className="card2 grid-text">
                    <img src= {`/images/sheep.jpg`}/>
                    <div className="grid-text">
                        <h3>
                            Stretch. Breathe. Relax. Yoga class with&nbsp;friends.
                        </h3>
                    </div>
                </div>
                <div className="card3 grid-text">
                    <img src={`/images/eating.jpg`}/>
                    <div className="grid-text">
                        <h3>
                            Meditate to music with Janice from&nbsp;Amsterdam
                        </h3>
                    </div>
                </div>
                <div className="card4 grid-text">
                    <img src= {`/images/sheep.jpg`}/>
                    <div className ="grid-text">
                        <h3>
                            Support African penguins by drawing with&nbsp;Jon
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Experience;