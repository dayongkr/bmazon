import { combineReducers } from 'redux';
import exchange from './exchange';
import product from './product';
import productList from './productList';
import user from './user';

const rootReducer = combineReducers({ exchange, product, productList, user });

export default rootReducer;
