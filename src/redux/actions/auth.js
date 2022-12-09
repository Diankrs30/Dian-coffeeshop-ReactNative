import ACTION_STRING from './actionString';
import {register} from '../../utils/auth';

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

const registerThunk = (body, cbSuccess, cbDenied) => {
  return async dispatch => {
    try {
      dispatch(registerPending());
      const result = await register(body);
      dispatch(registerFulfilled(result.data));
      if (typeof cbSuccess === 'function') {
        cbSuccess();
      }
    } catch (error) {
      dispatch(registerRejected(error));
      if (typeof cbDenied === 'function') {
        cbDenied();
      }
    }
  };
};

const authAction = {
  registerThunk,
};

export default authAction;
