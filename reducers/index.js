import { combineReducers } from 'redux';
import exchange from './exchange';
import product from './product';
import productList from './productList';

const rootReducer = combineReducers({ exchange, product, productList });

export default rootReducer;
