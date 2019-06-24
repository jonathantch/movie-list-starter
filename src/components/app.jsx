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
    }

    handleSearch(searchKey) {
        filteredMovieListData = movieListData.filter((ele) => {
            return ele.title.includes(searchKey)
        });
        this.setState({allMovies: filteredMovieListData})
    }

    render() {
        return (
            <div className="app">
                <Search handleSearch={this.handleSearch}/>
                <MovieList movies={this.state.allMovies}/>
            </div>
        )
    }
}

export default App;