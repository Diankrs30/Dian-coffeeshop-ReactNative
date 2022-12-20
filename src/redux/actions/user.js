import ACTION_STRING from './actionString';
import {getProfile, editProfile} from '../../utils/user';

const getProfilePending = () => ({
  type: ACTION_STRING.getProfile.concat(ACTION_STRING.pending),
});

const getProfileRejected = error => ({
  type: ACTION_STRING.getProfile.concat(ACTION_STRING.rejected),
  payload: {error},
});

const getProfileFulfilled = data => ({
  type: ACTION_STRING.getProfile.concat(ACTION_STRING.fulfilled),
  payload: {data},
});

const editProfilePending = () => ({
  type: ACTION_STRING.editProfile.concat(ACTION_STRING.pending),
});

const editProfileRejected = error => ({
  type: ACTION_STRING.editProfile.concat(ACTION_STRING.rejected),
  payload: {error},
});

const editProfileFulfilled = data => ({
  type: ACTION_STRING.editProfile.concat(ACTION_STRING.fulfilled),
  payload: {data},
});

const getProfileThunk = (token, cbSuccess, cbDenied) => {
  return async dispatch => {
    try {
      dispatch(getProfilePending());
      const result = await getProfile(token);
      dispatch(getProfileFulfilled(result.data));
      if (typeof cbSuccess === 'function') {
        cbSuccess();
      }
    } catch (error) {
      dispatch(getProfileRejected(error));
      console.log(error);
      if (typeof cbSuccess === 'function') {
        cbDenied();
      }
    }
  };
};

const editProfileThunk = (body, token, cbSuccess, cbDenied) => {
  return async dispatch => {
    try {
      dispatch(editProfilePending());
      const result = await editProfile(body, token);
      dispatch(editProfileFulfilled(result.data));
      if (typeof cbSuccess === 'function') {
        cbSuccess();
      }
    } catch (error) {
      dispatch(editProfileRejected(error));
      console.log(error);
      if (typeof cbSuccess === 'function') {
        cbDenied();
      }
    }
  };
};

const resetUser = () => {
  return {
    type: ACTION_STRING.userReset,
  };
};

const userAction = {
  getProfileThunk,
  editProfileThunk,
  resetUser,
};

export default userAction;
