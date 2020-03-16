import React from 'react';
import axios from 'axios';
import { API_URL, API_KEY_3 } from '../utils/api';

import Movie from './Movie';
import MovieTabs from './MovieTabs';
import MoviePages from './MoviePages';
import MovieWillWatch from './MovieWillWatch';

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      movies: [],
      moviesWillWatch: [],
      sort_by: 'popularity.desc',
      page: 1,
      pages: 0
    }
  }

  componentDidMount() {
    axios.get(`${API_URL}/discover/movie?api_key=${API_KEY_3}&sort_by=${this.state.sort_by}&page=${this.state.page}`)
      .then(res => {
        this.setState({
          movies: res.data.results,
          pages: res.data.total_pages
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

  updateSortBy = value => {
    this.setState({
      sort_by: value
    })
  }

  updatePage = value => {
    this.setState({
      page: value
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.sort_by !== this.state.sort_by || prevState.page !== this.state.page) {
      axios.get(`${API_URL}/discover/movie?api_key=${API_KEY_3}&sort_by=${this.state.sort_by}&page=${this.state.page}`)
      .then(res => {
        this.setState({
          movies: res.data.results,
          pages: res.data.total_pages
        })
      })
    }
  }

  render() {
    if (this.state.movies.length) {
      return (
        <div className="container">
          <div className="row mt-4">
            <div className="col-9">
              <div className="row mb-4">
                <div className="col-12">
                  <MovieTabs 
                    sort_by={this.state.sort_by}
                    updateSortBy={this.updateSortBy}
                  />
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-12">
                  <MoviePages
                    page={this.state.page}
                    pages={this.state.pages}
                    updatePage={this.updatePage}
                  />
                </div>
              </div>
              <div className="row">
                {this.state.movies.map(movie => {
                  return (
                    <div className="col-4 mb-4" key={movie.id}>
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
              <MovieWillWatch movies={this.state.moviesWillWatch} />
            </div>
          </div>
        </div> 
      );

    }
    return null;
  }
}

export default App;
