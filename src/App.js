import React, { Component } from 'react';
import logo from './img/starwars_cover.jpg'

import  './App.css';



class App extends Component {
  render() {
    return (
      <div className='App'>
        <img src={logo} alt='cover' />
      </div>
    )
  }
}






export default App;
