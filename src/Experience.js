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
                <div className="card1">
                <img src= {`/images/lamb.jpg`}/>
                <h3>Dolore excepteur deserunt qui reprehenderit ex 
                    reprehenderit culpa irure ut ex Lorem laboris cupidatat.
                </h3>
                </div>
                <div className="card2">
                    <img src= {`/images/sheep.jpg`}/>
                    <h3>Dolore excepteur deserunt qui reprehenderit ex 
                    reprehenderit culpa irure ut ex Lorem laboris cupidatat.
                    </h3>
                </div>
                <div className="card3">
                    <img src={`/images/eating.jpg`}/>
                    <h3>Dolore excepteur deserunt qui reprehenderit ex 
                    reprehenderit culpa irure ut ex Lorem laboris cupidatat.
                    </h3>
                </div>
                <div className="card4">
                    <img src= {`/images/sheep.jpg`}/>
                    <h3>Dolore excepteur deserunt qui reprehenderit ex 
                    reprehenderit culpa irure ut ex Lorem laboris cupidatat.
                    </h3>
                </div>
            </div>
        </div>
    )
};

export default Experience;