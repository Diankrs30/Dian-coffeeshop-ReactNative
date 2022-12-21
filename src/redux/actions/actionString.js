import {ActionType} from 'redux-promise-middleware';

const ACTION_STRING = {
  register: 'AUTH_REGISTER',
  login: 'AUTH_LOGIN',
  forgotPwd: 'AUTH_FORGOT_PASSWORD',
  resetPwd: 'AUTH_RESET_PASSWORD',
  logout: 'AUTH_LOGOUT',
  getAllProduct: 'GET_ALL_PRODUCT',
  getProfile: 'USER_GETPROFILE',
  editProfile: 'EDIT_PROFILE',
  getDetailProduct: 'GET_DETAIL_PRODUCT',
  getSize: 'GET_SIZE',
  createTransaction: 'CREATE_TRANSACTION',
  getHistory: 'GET_HISTORY',
  createCart: 'CREATE_CART',
  updateCart: 'UPDATE_CART',
  updateCartToPayment: 'UPDATE_CART_TO_PAYMENT',
  resetCart: 'RESET_CART',
  resetUpdateCart: 'RESET_UPDATECART',
  authReset: 'RESET_AUTH',
  userReset: 'RESET_USER',
  transactionReset: 'RESET_TRANSACTION',
  editProduct: 'EDIT_PRODUCT',
  createProduct: 'CREATE_PRODUCT',
  getAllPromo: 'GET_ALL_PROMO',
  detailPromo: 'GET_DETAIL_PROMO',
  pending: `_${ActionType.Pending}`,
  fulfilled: `_${ActionType.Fulfilled}`,
  rejected: `_${ActionType.Rejected}`,
};

export default ACTION_STRING;
