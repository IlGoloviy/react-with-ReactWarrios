import React from 'react';

const MovieWillWatch = (props) => {
  const { movies } = props;

  return (
    <div>
      <h3>Will Watch: {movies.length}</h3>
      <ul className="list-group">
        {movies.map(movie => {
          return (
            <li key={movie.id} className="list-group-item">
              <div className="d-flex justify-content-between">
                <div>{movie.title}</div>
                <div>{movie.vote_average}</div>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default MovieWillWatch;