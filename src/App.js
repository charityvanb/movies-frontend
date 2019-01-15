import React, { Component } from 'react';
import './App.css';

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
      movies: movies
    }))
  }
  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
