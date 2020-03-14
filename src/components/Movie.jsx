import React from 'react';

class Movie extends React.Component {
  constructor(props) {
    super();
    this.state = {
      btnAdd: false
    }
  }

  render() {
    const { data, addWillWatchMovie, deleteWillWatchMovie } = this.props;
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
            {this.state.btnAdd ? (
              <button 
                type="button" 
                className="btn btn-success"
                onClick={() => {
                  this.setState({btnAdd: false});
                  deleteWillWatchMovie(data)
                }}
              >
                Remove Will Watch
              </button>
            ) : (
              <button 
                type="button" 
                className="btn btn-secondary"
                onClick={() => {
                  this.setState({btnAdd: true});
                  addWillWatchMovie(data)
                }}
              >
                Add Will Watch
              </button>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Movie;