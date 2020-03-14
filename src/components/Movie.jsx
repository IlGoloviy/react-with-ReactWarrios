import React from 'react';

const Movie = (props) => {
  const { data, willWatchMovie } = props;
  return (
    <div className="card">
      <img
        className="card-img-top"
        src={`https://image.tmdb.org/t/p/w500${data.backdrop_path ||
          data.poster_path}`}
        alt="poster"
      />
      <div className="card-body">
        <h6 className="card-title">{data.title}</h6>
        <div className="d-flex justify-content-between align-items-center">
          <p className="mb-0">Rating: {data.vote_average}</p>
          <button 
            type="button" 
            className="btn btn-secondary"
            onClick={willWatchMovie.bind(null, data)}
          >
            Will Watch
          </button>
        </div>
      </div>
    </div>
  )
}

export default Movie;