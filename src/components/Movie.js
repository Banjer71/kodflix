import React from 'react';



function Movie(props) {
    return (
      <div className='item'>
        <img src={props.cover} alt={`${props.name} logo`} />
        <div className='overlay'>
          <h2>{props.name}</h2>
        </div>
      </div>
    )
  }



export default Movie;