import React from 'react';
import MovieList from './movieList.jsx';
import movieListData from '../data/movieListData.js';
import Search from './search.jsx';
import AddMovie from './addMovie.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allMovies: [],
      filteredMovies: []
    }

    this.search = this.search.bind(this);
    this.addMovie = this.addMovie.bind(this);
    this.toggleWatched = this.toggleWatched.bind(this);
    this.getNewData = this.getNewData.bind(this);
  }

  componentDidMount() {
    this.getNewData();
  }

  // reference movieListData directly so it doesn't get double filtered
  search(searchKey, callback = () => {}) {
    var filteredMovieListData = this.state.allMovies.filter((ele) => {
      var lowerCaseTitle = ele.name.toLowerCase();
      var lowerCaseSearchKey = searchKey.toLowerCase();
      return lowerCaseTitle.includes(lowerCaseSearchKey)
    });
    this.setState({filteredMovies: filteredMovieListData});
    callback();
  }

  getNewData() {
    axios.get('/add')
    .then((response) => {
      this.setState({
        allMovies: response.data,
        filteredMovies: response.data
      })
    });
  }

  addMovie(name, callback = () => {}) {
    if (name !== '') {
      axios.post('/', {
        name: name,
        watched: 0
      })
      .then(() => {
        this.getNewData();
        callback();
      })
      .catch((error) => {
        console.log(error);
      });
    }
  }

  // TODO: ask why we don't need to update filteredData
  toggleWatched(index) { // index here is the index of entire movielist rather than of filtered movielist
    var updatedMovieListData = this.state.allMovies.slice();
    if (updatedMovieListData[index].watched === 0) {
      updatedMovieListData[index].watched = 1;
    } else {
      updatedMovieListData[index].watched = 0;
    }
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