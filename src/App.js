import React from 'react';
import Header from './Header.js';
import Stay from './stay.js';
import Experience from './Experience.js'
import Hero from './Hero.js'
import './App.css';


const App = (props) => {
  return(
    <div className= "contain">
      <Header/>
      <Stay />
      <Experience />
      <Hero />
    </div>
  )
};



export default App;
