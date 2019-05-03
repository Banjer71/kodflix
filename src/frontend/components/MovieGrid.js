import React from 'react';

import Movie from './Movie';
import getMovie from './GetMovie';



function MovieGrid() {
  fetch('/rest/shows')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
  });

    return (
      <div>
        <div className='container'>
            {
              getMovie().map(movie => (
                <Movie 
                key={movie.id}
                id={movie.id} 
                name={movie.name} 
                cover={movie.cover} />
                ))
            }
          </div>
      </div>
    )
  }

export default MovieGrid