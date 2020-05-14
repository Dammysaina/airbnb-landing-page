import React from 'react';
import Header from './Header.js';
import Stay from './stay.js';
import Experience from './Experience.js';
import Hero from './Hero.js';
import Informed from './Informed.js';
import Footer from './Footer.js';
import './App.css';


export default class App extends React.Component {

render () {
  return(
    <div className= "contain">
      <Header/>
      <Stay />
      <Experience />
      <Hero />
      <Informed />
      <Footer />
    </div>
  )
};
  
};


