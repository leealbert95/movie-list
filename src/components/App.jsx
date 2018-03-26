import React, { Component } from 'react';
import _ from 'lodash';
import MoviesList from './MoviesList.jsx';
import Search from './Search.jsx';
import AddMovie from './AddMovie.jsx';
import exampleMovieData from '../exampleMovieData.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allMovies: exampleMovieData,
      matchingMovies: exampleMovieData
    }

    this.search = this.search.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  addMovie(movieTitle) {
    var newMovie = {};
    var updatedMovies = JSON.parse(JSON.stringify(this.state.allMovies));
    newMovie.title = movieTitle
    updatedMovies.push(newMovie);
    this.setState({
      allMovies: updatedMovies,
      matchingMovies: updatedMovies,
    }, alert('Movie Added!'));
  }

  search(query) {
    var lowercaseQuery = query.toLowerCase();
    var queryTerms = lowercaseQuery.split(' ');
    console.log(queryTerms);
    var searchResults = this.state.allMovies.filter(movie => this.matchesQuery(queryTerms, movie))
    this.setState({
      matchingMovies: searchResults,
    });
  }

  matchesQuery(queryTerms, movie) {
    var lowerCaseMovieTitle = movie.title.toLowerCase(); 
    for (var i = 0; i < queryTerms.length; i++) {
      console.log(queryTerms[i]);
      console.log(lowerCaseMovieTitle);
      if (lowerCaseMovieTitle.includes(queryTerms[i])) {
        return true;
      }
    }
    return false;
  }

  render() {
    return (
      <div className="container">
        <AddMovie addMovie={this.addMovie}/>
        <Search search={this.search}/>
        <MoviesList movies={this.state.matchingMovies}/>
      </div>
    );
  }
}

export default App;