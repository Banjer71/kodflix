import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import MovieGrid from './components/MovieGrid';
import Details from './components/Details';


import './App.css';




class App extends Component {
  render() {
    return ( 
      <Router>
        <div className='App'>
          <Route exact path='/' component={MovieGrid} />
          <Route exact path='/details' component={Details} />
        </div>
      </Router>
    )
  }
}






export default App;
