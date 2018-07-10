import React, { Component } from 'react';
import './App.css';
import Home from './Page/home'
import Brand from './Page/brand'
import AdidasPage from './Page/AdidasPage'

import Axios from 'axios'

import Popup from 'reactjs-popup'

import { Link, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      
      <div>
          
          <Route exact path="/" component={Home}/> 
          <Route path="/brands" component={Brand}/> 
          <Route path="/AdidasPage" component={AdidasPage}/>

      </div>
    );
  }
}

export default App;
