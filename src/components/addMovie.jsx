import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputAdd: ''
    }

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this)
  }

  onChangeHandler(event) {
    this.setState({
      inputAdd: event.target.value
    })
  }

  onClickHandler(event) {
    event.preventDefault();
    this.props.addMovie(this.state.inputAdd, () => {
      this.setState({
        inputAdd: ''
      })
    });
  }

  render() {
    return (
      <form>
        <input value={this.state.inputAdd} onChange={this.onChangeHandler}></input>
        <button onClick={this.onClickHandler}>ADD</button>
      </form>
    )
  }
}

export default AddMovie;