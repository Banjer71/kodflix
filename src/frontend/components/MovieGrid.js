import React from 'react';

import Movie from './Movie';
//import getMovie from './GetMovie';



class MovieGrid extends React.Component {
  constructor() {
    super();
    this.state = { shows: [] }
  }

  componentDidMount() {
  fetch('/rest/shows')
    .then(response =>  response.json())
    .then(shows => this.setState({ shows }));
    // console.log(JSON.stringify(myJson));
  }

render() {
    return (
      <div>
        <div className='container'>
            {
              this.state.shows.map(movie => {
                return (
                  <Movie 
                key={movie.id}
                id={movie.id} 
                name={movie.name} 
                cover={movie.cover} 
                />
                );
              })
            }
          </div>
      </div>
    );
  }
}
export default MovieGrid