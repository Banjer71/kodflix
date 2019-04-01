import React, { Component } from 'react';
import mainPic from './img/starwars_cover.jpg'

import goonies from './img/goonies.jpg'
import brother from './img/brothers.jpg'
import wargames from './img/wargames.jpg'
import strangeThings from './img/strange_things.jpg'
import firstMan from './img/first_man.jpg'
import backtothefuture from './img/backtothefuture.jpg'
import  './App.css';



class App extends Component {
  render() {
    return (
      <div className='App'>
        <img src={mainPic} alt='cover' />
        
      <div className='container'>
        <div className= 'item'><img src={goonies} alt='cover' /></div>
        <div className= 'item'><img src={brother} alt='cover' /></div>
        <div className= 'item'><img src={wargames} alt='cover' /></div>
      </div>

      <div className='container'>
        <div className= 'item'><img src={backtothefuture} alt='cover' /></div>
        <div className= 'item'><img src={strangeThings} alt='cover' /></div>
        <div className= 'item'><img src={firstMan} alt='cover' /></div>
      </div>
        
      </div>
    )
  }
}






export default App;
