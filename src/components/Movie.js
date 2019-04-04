import React from 'react';
import {Link} from 'react-router-dom';


function Movie(props) {
    return (
      <Link to='/details' className='item'>
        <img src={props.cover} alt={`${props.name} logo`} />
        <div className='overlay'>
          <h2>{props.name}</h2>
        </div>
      </Link>
    )
  }



export default Movie;