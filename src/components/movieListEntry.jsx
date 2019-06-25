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
      this.props.movie.watched?
      <div onClick={this.onClickHandler}> <span>{this.props.movie.title}</span> <span>Watched</span></div>
      :<div onClick={this.onClickHandler}> <span>{this.props.movie.title}</span> <span>To Watch</span></div>
    )
  }
}

export default MovieEntryList;