import {combineReducers} from '@reduxjs/toolkit';
import authReducer from './auth';
import userReducer from './user';
import ProductReducer from './product';

export default combineReducers({
  auth: authReducer,
  user: userReducer,
  product: ProductReducer,
});
