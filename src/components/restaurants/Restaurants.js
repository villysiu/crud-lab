import React, { Component } from 'react';
import Restaurant from "./Restaurant"

class Restaurants extends Component {
  
  render() {
   // console.log(this.props.restaurants)
    return(
      <ul>

         { this.props.restaurants.map((restaurant) => 
          <Restaurant key={restaurant.id}
                      restaurant = {restaurant}  
                      delete={this.props.delete} 
                      update={this.props.update}/>
        )} 
      </ul>
    );
  }
};

export default Restaurants;