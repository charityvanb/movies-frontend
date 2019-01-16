import React, { Component } from 'react';
import './App.css';
import MovieList from './components/MovieList.js';

class App extends Component {
  state = {
    movies: []
  }
  componentDidMount() {
    this.getMovies()
  }
  
  getMovies () {
    fetch('http://localhost:3004/')
    .then(movies => movies.json())
    .then(movies => this.setState({
      movies: movies.movies
    }))
  }
  render() {
    return (
      <div className="App">
      <MovieList movies={this.state.movies}/>
      </div>
    );
  }
}

export default App;
