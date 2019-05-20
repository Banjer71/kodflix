import React from 'react';
import {Link} from 'react-router-dom';


function Movie(props) {
    return (
      <Link to={`/${props.id}`} className='item'>
        <img src={require(`../commons/img/${props.id}.jpg`)} alt={`${props.name} logo`} />
        <div className='overlay'>
          <h2>{props.name}</h2>
        </div>
      </Link>
    )
  }



export default Movie;