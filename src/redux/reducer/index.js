import {combineReducers} from '@reduxjs/toolkit';
import authReducer from './auth';
import userReducer from './user';
import ProductReducer from './product';
import transactionReducer from './transaction';
import updateCartReducer from './updateCart';

export default combineReducers({
  auth: authReducer,
  user: userReducer,
  product: ProductReducer,
  updateCart: updateCartReducer,
  transaction: transactionReducer,
});
