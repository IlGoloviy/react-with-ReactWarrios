import React from 'react';
import { moviesData } from '../moviesData';
import Movie from './Movie';

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      movies: moviesData,
      moviesWillWatch: []
    }
  }

  deleteMovie = data => {
    this.setState({
      movies: this.state.movies.filter(movie => {
        return movie.id !== data.id
      })
    })
  }

  willWatchMovie = data => {
    this.setState({
      moviesWillWatch: [...this.state.moviesWillWatch, data]
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-9">
            <div className="row">
              {this.state.movies.map(movie => {
                return (
                  <div className="col-6 mb-4" key={movie.id}>
                    <Movie  
                      data={movie} 
                      deleteMovie={this.deleteMovie}
                      willWatchMovie={this.willWatchMovie}
                    ></Movie>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="col-3">
            <p>Will Watch: {this.state.moviesWillWatch.length}</p>
          </div>
        </div>
      </div> 
    );
  }
}

export default App;
