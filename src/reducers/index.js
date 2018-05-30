import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import ProductReducer from './ProductReducer';
import OrderReducer from './OrderReducer';

export default combineReducers({
   auth: AuthReducer,
   products: ProductReducer,
   order: OrderReducer
});
