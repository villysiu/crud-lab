import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer';
import EditButton from './EditButton';
import UpdateButton from './UpdateButton';

class Restaurant extends Component {
  state = {
    editButtonClicked: false
  }
  handleChange = () => {  
    this.setState((previousState) => {
        return {
            editButtonClicked: !previousState.editButtonClicked
        }  
    })
  }

  render() {
    console.log(this.props)
    const { restaurant } = this.props;
  

    return (
      <div>
        <li>
          {/* {restaurant.text} */}
          {this.state.editButtonClicked ? 
            <UpdateButton restaurant={restaurant} update={this.props.update} handleChange={this.handleChange} /> : 
            <EditButton restaurant={this.props.restaurant} handleChange={this.handleChange} />}
          <button onClick={() => this.props.delete(restaurant.id)}> X </button>
          <ReviewsContainer restaurantId={restaurant.id}/>
        </li>
      </div>
    );
  }
};

export default Restaurant;
