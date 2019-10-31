import { combineReducers } from 'redux';
import exchange from './exchange';
import product from './product';
import productList from './productList';
import user from './user';
import cart from './cart';

const rootReducer = combineReducers({
  exchange,
  product,
  productList,
  user,
  cart,
});

export default rootReducer;
