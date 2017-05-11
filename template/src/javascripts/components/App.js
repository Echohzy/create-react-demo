'use strict';

import React, { Component } from 'react';

import { Link, Route } from 'react-router-dom';

import Home from './Home.js';

import About from './About.js';

export default class App extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
        <h1>React Demo</h1>
        <hr />
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
        <Route exact  path="/" component={Home} /> 
        <Route path="/about" component={About} />
      </div>
    );
  }
}