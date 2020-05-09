import React from 'react';
import Header from './Header.js';
import Stay from './stay.js';
import Experience from './Experience.js'
import './App.css';


const App = (props) => {
  return(
    <div className= "contain">
      <Header/>
      <Stay />
      <Experience />
    </div>
  )
};



export default App;
