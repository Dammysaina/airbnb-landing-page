import React from 'react';
import './Search.css'
const Search = (props) => {
    return(
        <div className="search-container">
            <div className="search-filter">
                <p>Places to stay</p>
                <p>Monthly Stays </p>
                <p>Experiences</p>
                <p>Online Experiences<span className="new">New</span></p>
            </div>
            <div className="search-form-div">
                <form className="search-form">
                    <div>
                    <label>LOCATION</label>
                    <input placeholder="Where are you going?" type="text" />
                    </div>
                    <div>
                    <label>LOCATION</label>
                    <input placeholder="Where are you going?" type="text" />
                    </div>
                    <div>
                    <label>LOCATION</label>
                    <input placeholder="Where are you going?" type="text" />
                    </div>
                    <button> <span><img src={`/images/search-solid.svg`}/></span>Search </button>
                </form>
            </div>
        </div>
    )
};
export default Search;