import React from 'react';
import MovieList from './movieList.jsx';
import movieListData from '../data/movieListData.js';
import Search from './search.jsx';
import AddMovie from './addMovie.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allMovies: movieListData,
      filteredMovies: movieListData
    }

    this.search = this.search.bind(this);
    this.addMovie = this.addMovie.bind(this);
    this.toggleWatched = this.toggleWatched.bind(this);
  }

  // reference movieListData directly so it doesn't get double filtered
  search(searchKey, callback = () => {}) {
    var filteredMovieListData = this.state.allMovies.filter((ele) => {
      var lowerCaseTitle = ele.title.toLowerCase();
      var lowerCaseSearchKey = searchKey.toLowerCase();
      return lowerCaseTitle.includes(lowerCaseSearchKey)
    });
    this.setState({filteredMovies: filteredMovieListData});
    callback();
  }

  addMovie(name, callback = () => {}) {
    var newMovie = {watched: false};
    var updatedMovieListData = this.state.allMovies.slice();
    newMovie.title = name;
    updatedMovieListData.push(newMovie);
    updatedMovieListData.forEach((movie, index) => { // Add an ID for entire movie list
      movie.allId = index;
    })
    this.setState({
      allMovies: updatedMovieListData,
      filteredMovies: updatedMovieListData
    })
    callback();
  }

  // TODO: ask why we don't need to update filteredData
  toggleWatched(index) { // index here is the index of entire movielist rather than of filtered movielist
    var updatedMovieListData = this.state.allMovies.slice();
    updatedMovieListData[index].watched = !updatedMovieListData[index].watched;
    this.setState({
      allMovies: updatedMovieListData
    })
  }

  render() {
    return (
      <div className="app">
        <AddMovie addMovie={this.addMovie}/>
        <Search search={this.search}/>
        <MovieList movies={this.state.filteredMovies} toggleWatched={this.toggleWatched}/>
      </div>
    )
  }
}

export default App;