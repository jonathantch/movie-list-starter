import React from 'react';

class MovieEntryList extends React.Component {

  constructor(props) {
    super(props)

    this.onClickHandler = this.onClickHandler.bind(this);
  }
    
  onClickHandler() {
    this.props.toggleWatched(this.props.index);
  }

  render() {
    return (
      this.props.movie.watched === 1?
      <div onClick={this.onClickHandler}> <span>{this.props.movie.name}</span> <span>Watched</span></div>
      :<div onClick={this.onClickHandler}> <span>{this.props.movie.name}</span> <span>To Watch</span></div>
    )
  }
}

export default MovieEntryList;