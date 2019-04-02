import React, { Component } from 'react';

import goonies from './img/goonies.jpg';
import brother from './img/brothers.jpg';
import wargames from './img/wargames.jpg';
import strangeThings from './img/strange_things.jpg';
import firstMan from './img/first_man.jpg';
import backtothefuture from './img/backtothefuture.jpg';

import  './App.css';



class App extends Component {
  render() {
    return (
      <div className='App'>
       
      <div className='container'>
        <div className= 'item'>
          <img src={goonies} alt='cover' />
          <div className='overlay'>
            <h2>The Goonies</h2>
          </div>
        </div>
        <div className= 'item'>
          <img src={brother} alt='cover' />
          <div className='overlay'>
            <h2>Brother Where are Thou</h2>
          </div>
          </div>
        <div className= 'item'>
          <img src={wargames} alt='cover' />
          <div className='overlay'>
            <h2>Wargames</h2>
          </div>
          </div>
      </div>
      <div className='container'>
        <div className= 'item'>
          <img src={backtothefuture} alt='cover' />
          <div className='overlay'>
            <h2>Back To The Future</h2>
          </div>
          </div>
        <div className= 'item'>
          <img src={strangeThings} alt='cover' />
          <div className='overlay'>
            <h2>Strance Things</h2>
          </div>
          </div>
        <div className= 'item'>
          <img src={firstMan} alt='cover' />
          <div className='overlay'>
            <h2>First Man</h2>
          </div>
          </div>
      </div>
        
      </div>
    )
  }
}






export default App;
