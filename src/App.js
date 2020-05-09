import React from 'react';
import Header from './Header.js';
import Stay from './stay.js';
import './App.css';


const App = (props) => {
  return(
    <div className= "contain">
      <Header/>
      <Stay />
    </div>
  )
};



export default App;
