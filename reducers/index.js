import { combineReducers } from 'redux';
import exchange from './exchange';
import product from './product';
import productList from './productList';
import user from './user';
import cart from './cart';
import alert from './alert';

const rootReducer = combineReducers({
  exchange,
  product,
  productList,
  user,
  cart,
  alert,
});

export default rootReducer;
