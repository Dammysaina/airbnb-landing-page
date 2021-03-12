import React from 'react';
// import {Switch, Route} from 'react-router-dom';
import Header from './Header.js';
import Home from './Home';
import Footer from './Footer.js';
import './App.css';
// import Experience from './Experience.js';


export default class App extends React.Component {
  
render () {
  return(
    <div className= "contain">
      <Header />
      {/* <Switch>
        <Route path="/" component={Home} />
        
      </Switch> */}
      <Home />
      <Footer />

    </div>
  )
};
  
};


