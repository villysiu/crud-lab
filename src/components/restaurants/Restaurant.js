import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer';

class Restaurant extends Component {


  render() {
    //console.log(this.props)
    const { restaurant } = this.props;

    return (
      <div>
        <li>
          {restaurant.text}
          <button onClick={() => this.props.delete(restaurant.id)}> X </button>
          <ReviewsContainer restaurantId={restaurant.id}/>
        </li>
      </div>
    );
  }
};

export default Restaurant;
