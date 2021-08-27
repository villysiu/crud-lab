import React, { Component } from 'react';

class RestaurantInput extends Component {
  state = {
    text: ''
  }
  handleChange = event => {
    
    this.setState({
      text: event.target.value
  })
}
  handleSubmit = event => {
    event.preventDefault();
    this.props.addRestaurant(this.state.text)
    this.setState({
      text: ''
    })
  }
  render() {
    return (
      <div>
        Add new restaurant: 
        <form onSubmit={this.handleSubmit} >
        <input name='text' id='id' value={this.state.text} onChange={this.handleChange} />
        <input type="submit" />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
