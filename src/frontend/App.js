import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MovieGrid from './components/MovieGrid';
import Details from './components/Details';
import NotFound from './components/NotFound'


import './App.css';


class App extends Component {
  render() {
    return ( 
      <Router>
        <div className='App'>
          <Switch>
          <Route exact path='/' component={MovieGrid} />
          <Route exact path='/not-found' component={NotFound} />
          <Route exact path='/:movie_id' component={Details} />
          </Switch>
        </div>
      </Router>
    )
  }
}



export default App;
