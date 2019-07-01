import React from 'react';
import MovieListEntry from './MovieListEntry.jsx';

class MovieList extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      renderState: '',
    }

    this.onClickWatchedHandler = this.onClickWatchedHandler.bind(this, this.filterListByState);
    this.onClickToWatchHandler = this.onClickToWatchHandler.bind(this, this.filterListByState);
    this.onClickShowAllHandler = this.onClickShowAllHandler.bind(this, this.filterListByState);
  }

  onClickWatchedHandler() {
    this.setState({
      renderState: 'watched'
    })
  }

  onClickToWatchHandler() {
    this.setState({
      renderState: 'toWatch'
    })
  }

  onClickShowAllHandler() {
    this.setState({
      renderState: ''
    })
  }

  filterListByState() {
    if (this.state.renderState === '') {
      this.state.renderList = this.props.movies
    } else {
      this.state.renderList = this.props.movies.filter((ele) => {
        return ele.watched === this.state.renderState;
      })
    }
  }



  render() {
    if (this.state.renderState === '') {
      return (
        <div>
          <button onClick={this.onClickWatchedHandler}>Show Watched</button>
          <button onClick={this.onClickToWatchHandler}>Show To Watch</button>
          <button onClick={this.onClickShowAllHandler}>Show All</button>
          {
            this.props.movies.map((ele) => {
              return <MovieListEntry movie={ele} key={ele.id} index={ele.id - 1} toggleWatched={this.props.toggleWatched}/>
            })
          }
        </div>
      )
    } else if (this.state.renderState === 'watched') {
      return (
        <div>
          <button onClick={this.onClickWatchedHandler}>Show Watched</button>
          <button onClick={this.onClickToWatchHandler}>Show To Watch</button>
          <button onClick={this.onClickShowAllHandler}>Show All</button>
          {
            this.props.movies
            .filter((ele) => {
              return ele.watched === 1;
            })
            .map((ele) => {
              return <MovieListEntry movie={ele} key={ele.id} index={ele.id - 1} toggleWatched={this.props.toggleWatched}/>
            })
          }
        </div>
      )
    } else if (this.state.renderState === 'toWatch') {
      return (
        <div>
          <button onClick={this.onClickWatchedHandler}>Show Watched</button>
          <button onClick={this.onClickToWatchHandler}>Show To Watch</button>
          <button onClick={this.onClickShowAllHandler}>Show All</button>
          {
            this.props.movies
            .filter((ele) => {
              return ele.watched === 0;
            })
            .map((ele) => {
              return <MovieListEntry movie={ele} key={ele.id} index={ele.id - 1} toggleWatched={this.props.toggleWatched}/>
            })
          }
        </div>
      )
    }
  }
}

export default MovieList;