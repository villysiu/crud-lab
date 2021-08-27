import React, { Component } from 'react';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';
import { connect } from 'react-redux';

class ReviewsContainer extends Component {

  render() {
   // console.log(this.props)
    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restaurantId={this.props.restaurantId} />
        <Reviews reviews={this.props.reviews} delete={this.props.deleteReview} restaurantId={this.props.restaurantId} />
      </div>
    )
  }
}

const mapStateToProps = state => {
 // console.log(state.reviews)
  return {
    reviews: state.reviews
  }
}
const mapDispatchToProps = dispatch => {
  return {
    addReview: formData => dispatch({type: 'ADD_REVIEW', review: formData}),
    deleteReview: id => dispatch ({type: 'DELETE_REVIEW', id})
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);
