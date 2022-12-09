import ACTION_STRING from './actionString';
import {register, login} from '../../utils/auth';

const registerPending = () => ({
  type: ACTION_STRING.register.concat(ACTION_STRING.pending),
});

const registerRejected = error => ({
  type: ACTION_STRING.register.concat(ACTION_STRING.rejected),
  payload: {error},
});

const registerFulfilled = data => ({
  type: ACTION_STRING.register.concat(ACTION_STRING.fulfilled),
  payload: {data},
});

const loginPending = () => ({
  type: ACTION_STRING.login.concat(ACTION_STRING.pending),
});

const loginRejected = error => ({
  type: ACTION_STRING.login.concat(ACTION_STRING.rejected),
  payload: {error},
});

const loginFulfilled = data => ({
  type: ACTION_STRING.login.concat(ACTION_STRING.fulfilled),
  payload: {data},
});

const registerThunk = (body, cbSuccess, cbDenied) => {
  return async dispatch => {
    try {
      dispatch(registerPending());
      // console.log('redux', body);
      const result = await register(body);
      dispatch(registerFulfilled(result.data));
      if (typeof cbSuccess === 'function') {
        cbSuccess();
      }
    } catch (error) {
      dispatch(registerRejected(error));
      // console.log(error);
      if (typeof cbDenied === 'function') {
        cbDenied();
      }
    }
  };
};

const loginThunk = (body, cbSuccess, cbDenied) => {
  return async dispatch => {
    try {
      dispatch(loginPending());
      console.log('redux login', body);
      const result = await login(body);
      dispatch(loginFulfilled(result.data));
      if (typeof cbSuccess === 'function') {
        cbSuccess();
      }
    } catch (error) {
      dispatch(loginRejected(error));
      console.log(error);
      if (typeof cbDenied === 'function') {
        cbDenied();
      }
    }
  };
};

const authAction = {
  registerThunk,
  loginThunk,
};

export default authAction;
