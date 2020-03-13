import React from 'react';

const Movie = (props) => {
  return (
    <div>
      <p>{props.data.title}</p>
      <button onClick={props.deleteMovie.bind(null, props.data)}>delete</button>
    </div>
  )
}

export default Movie;