'use strict';

import React, { Component } from 'react';

import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Home from './components/Home';

import About from './components/About';

import '../stylesheets/style.css';

class Main extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <Router>
        <div>
        <h1>React Demo</h1>
        <hr />
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
        <hr />
        <Route exact  path="/" component={Home} /> 
        <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}


ReactDOM.render(<Main />, document.getElementById('app'));