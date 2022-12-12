import {ActionType} from 'redux-promise-middleware';

const ACTION_STRING = {
  register: 'AUTH_REGISTER',
  login: 'AUTH_LOGIN',
  forgotPwd: 'AUTH_FORGOT_PASSWORD',
  resetPwd: 'AUTH_RESET_PASSWORD',
  logout: 'AUTH_LOGOUT',
  getAllProduct: 'GET_ALL_PRODUCT',
  getProfile: 'USER_GETPROFILE',
  getDetailProduct: 'GET_DETAIL_PRODUCT',
  getSize: 'GET_SIZE',
  pending: `_${ActionType.Pending}`,
  fulfilled: `_${ActionType.Fulfilled}`,
  rejected: `_${ActionType.Rejected}`,
};

export default ACTION_STRING;
