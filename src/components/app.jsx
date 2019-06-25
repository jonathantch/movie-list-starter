import React from 'react';
import MovieList from './movieList.jsx';
import movieListData from '../data/movieListData.js';
import Search from './search.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allMovies: movieListData,
      searchKey: ''
    }

    this.search = this.search.bind(this);

  }

  // reference movieListData directly so it doesn't get double filtered
  search(searchKey, callback = () => {}) {
    var filteredMovieListData = movieListData.filter((ele) => {
      var lowerCaseTitle = ele.title.toLowerCase();
      var lowerCaseSearchKey = searchKey.toLowerCase();
      return lowerCaseTitle.includes(lowerCaseSearchKey)
    });
    this.setState({allMovies: filteredMovieListData});
    callback();
  }

  render() {
    return (
      <div className="app">
        <Search search={this.search}/>
        <MovieList movies={this.state.allMovies}/>
      </div>
    )
  }
}

export default App;