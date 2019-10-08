import { combineReducers } from 'redux';
import exchange from './exchange';
import product from './product';

const rootReducer = combineReducers({ exchange, product });

export default rootReducer;
