import React, { Component } from 'react';

import Movie from './components/Movie';

import goonies from './img/goonies.jpg';
import brother from './img/brothers.jpg';
import wargames from './img/wargames.jpg';
import strangeThings from './img/strange_things.jpg';
import firstMan from './img/first_man.jpg';
import backtothefuture from './img/backtothefuture.jpg';


import './App.css';



class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='container'>
          <Movie name='The Goonies' cover={goonies} />
          <Movie name='Brother Where are Thou' cover={brother} />
          <Movie name='WarGames' cover={wargames} />
        </div>
        <div className='container'>
          <Movie name='Back To The Future' cover={backtothefuture} />
          <Movie name='Strange Things' cover={strangeThings} />
          <Movie name='First Man' cover={firstMan} />
        </div>
      </div>
    )
  }
}






export default App;
