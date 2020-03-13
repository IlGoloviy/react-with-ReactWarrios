import React from 'react';
import { moviesData } from '../moviesData';
import Movie from './Movie';

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      movies: moviesData
    }
    this.deleteMovie = this.deleteMovie.bind(this);
  }

  deleteMovie(data) {
    this.setState({
      movies: this.state.movies.filter(movie => {
        return movie.id !== data.id
      })
    })
  }

  render() {
    return (
      <div>
        {this.state.movies.map(movie => {
          return <Movie 
            key={movie.id} 
            data={movie} 
            deleteMovie={this.deleteMovie}
          ></Movie>
        })}
      </div>
    );
  }
}

export default App;
