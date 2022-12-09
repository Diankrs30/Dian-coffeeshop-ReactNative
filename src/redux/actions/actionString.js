import {ActionType} from 'redux-promise-middleware';

const ACTION_STRING = {
  register: 'AUTH_REGISTER',
  pending: `_${ActionType.Pending}`,
  fulfilled: `_${ActionType.Fulfilled}`,
  rejected: `_${ActionType.Rejected}`,
};

export default ACTION_STRING;
