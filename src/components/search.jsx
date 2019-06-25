import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ''
    }

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler(event) {
    event.preventDefault();
    this.props.search(this.state.input,
      this.setState({
        input: ''
      })
    );
  }

  onChangeHandler(event) {
    this.setState({
      input: event.target.value
    });
  }


  render() {
    return (
      <form className="search">
        <input value={this.state.input} onChange={this.onChangeHandler} />
        <button onClick={this.onClickHandler}>SEARCH</button>
      </form>
    )
  }
}

export default Search;