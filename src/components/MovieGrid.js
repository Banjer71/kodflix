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
            <Movie id='goonies' name='The Goonies' cover={goonies} />
            <Movie id='brotherwht'name='Brother Where are Thou' cover={brother} />
            <Movie id='warganmes'name='WarGames' cover={wargames} />
          </div>
          <div className='container'>
            <Movie id='backtothefuture' name='Back To The Future' cover={backtothefuture} />
            <Movie id='strangethings' name='Strange Things' cover={strangeThings} />
            <Movie id='firstman' name='First Man' cover={firstMan} />
          </div>
      </div>
    )
  }




export default MovieGrid