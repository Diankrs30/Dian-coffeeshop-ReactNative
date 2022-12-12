import ACTION_STRING from './actionString';
import {getProfile} from '../../utils/user';

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

const getProfileThunk = token => {
  return async dispatch => {
    try {
      dispatch(getProfilePending());
      const result = await getProfile(token);
      dispatch(getProfileFulfilled(result.data));
    } catch (error) {
      dispatch(getProfileRejected(error));
      console.log(error);
    }
  };
};

const userAction = {
  getProfileThunk,
};

export default userAction;
