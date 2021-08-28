import React, { Component } from 'react';
import RestaurantInput from '../components/restaurants/RestaurantInput';
import Restaurants from '../components/restaurants/Restaurants';
import { connect } from 'react-redux';

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant} />
        <Restaurants restaurants={this.props.restaurants} delete={this.props.deleteRestaurant} update={this.props.updateRestaurant}/>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    restaurants: state.restaurants
  }
}
const mapDispatchToProps = dispatch => {
  
  return {
    addRestaurant: formData => dispatch({type: 'ADD_RESTAURANT', text: formData}),
    deleteRestaurant: id => dispatch ({type: 'DELETE_RESTAURANT', id}),
    updateRestaurant: formData => dispatch({type: 'UPDATE_RESTAURANT', formData})
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer);

