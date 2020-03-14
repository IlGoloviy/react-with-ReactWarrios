import React from 'react';
import axios from 'axios';
import { API_URL, API_KEY_3 } from '../utils/api';

import Movie from './Movie';

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      movies: [],
      moviesWillWatch: []
    }
  }

  componentDidMount() {
    axios.get(`${API_URL}/discover/movie?api_key=${API_KEY_3}`)
      .then(res => {
        this.setState({movies: res.data.results})
      })
  }

  deleteMovie = data => {
    this.setState({
      movies: this.state.movies.filter(movie => {
        return movie.id !== data.id
      })
    })
  }

  addWillWatchMovie = data => {
    this.setState({
      moviesWillWatch: [...this.state.moviesWillWatch, data]
    })
  }

  deleteWillWatchMovie = data => {
    this.setState({
      moviesWillWatch: this.state.moviesWillWatch.filter(movie => {
        return movie.id !== data.id
      })
    })
  }

  render() {
    if (this.state.movies.length) {
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
                        addWillWatchMovie={this.addWillWatchMovie}
                        deleteWillWatchMovie={this.deleteWillWatchMovie}
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
    return null;
  }
}

export default App;
