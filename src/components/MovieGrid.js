import React from 'react';

import Movie from './Movie';

import goonies from '../img/goonies.jpg';
import brother from '../img/brothers.jpg';
import wargames from '../img/wargames.jpg';
import strangeThings from '../img/strange_things.jpg';
import firstMan from '../img/first_man.jpg';
import backtothefuture from '../img/backtothefuture.jpg';

function MovieGrid() {
    return (
      <div>
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




export default MovieGrid