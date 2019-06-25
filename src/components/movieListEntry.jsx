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
      <div onClick={this.onClickHandler}>{this.props.movie.title} <div>Watched</div></div>
      :<div onClick={this.onClickHandler}>{this.props.movie.title} <div>To Watch</div></div>
    )
  }
}

export default MovieEntryList;