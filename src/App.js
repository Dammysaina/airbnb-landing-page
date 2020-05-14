import React from 'react';
import Header from './Header.js';
import Stay from './stay.js';
import Experience from './Experience.js';
import Hero from './Hero.js';
import Informed from './Informed.js';
import Footer from './Footer.js';
import './App.css';


export default class App extends React.Component {
  state = {
    location: "LOCATION",
    checkin : "CHECK IN / CHECK OUT",
    guest : "GUESTS",
    dates: "Add dates",
    addguests: "Add Guests"
  }
render () {
  return(
    <div className= "contain">
      <Header />
      <Stay labels={this.state} />
      <Experience />
      <Hero />
      <Informed />
      <Footer />
    </div>
  )
};
  
};


