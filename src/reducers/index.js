import { combineReducers } from 'redux';
import products from './products';
import users from './users';
import cart from './cart';
import filters from './filters';

export default combineReducers({
    products,
    users,
    cart,
    filters
});