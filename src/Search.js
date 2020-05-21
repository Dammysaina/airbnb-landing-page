import React from 'react';
import './Search.css'
const Search = (props) => {
    const labels = {
        location: "LOCATION",
        checkin : "CHECK IN / CHECK OUT",
        guest : "GUESTS",
        dates: "Add dates",
        addguests: "Add Guests"
    }
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
                    <label>{labels.location}</label>
                    <input placeholder="Where are you going?" type="text" />
                    </div>
                    <div>
                    <label>{labels.checkin}</label>
                    <input placeholder={labels.dates} type="text" />
                    </div>
                    <div>
                    <label>{labels.guest}</label>
                    <input placeholder={labels.addguests} type="text" />
                    </div>
                        <button> <span><img src={`/images/search-solid.svg`}/></span>Search </button>
            
                    
                </form>
            </div>
        </div>
    )
};
export default Search;