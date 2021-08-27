import { combineReducers } from 'redux';
import manageRestaurants from './manageRestaurant';
//import manageReviews from './manageReviews';

const rootReducer = combineReducers({
    restaurants: manageRestaurants
 //   reviews: manageReviews
})

export default rootReducer;