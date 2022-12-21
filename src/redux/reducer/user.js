import ACTION_STRING from '../actions/actionString';

const initialState = {
  profile: {},
  isLoading: false,
  isError: false,
  isFulfilled: false,
  error: null,
};

const userReducer = (prevState = initialState, {type, payload}) => {
  const {
    getProfile,
    editProfile,
    userReset,
    editPassword,
    pending,
    rejected,
    fulfilled,
  } = ACTION_STRING;
  switch (type) {
    case getProfile + pending:
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case getProfile + rejected:
      return {
        ...prevState,
        isError: true,
        isLoading: false,
        isFulfilled: false,
        error: payload.error.message,
      };
    case getProfile + fulfilled:
      return {
        ...prevState,
        isLoading: false,
        isError: false,
        isFulfilled: true,
        profile: payload.data.data,
      };
    case editProfile + pending:
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case editProfile + rejected:
      return {
        ...prevState,
        isError: true,
        isLoading: false,
        isFulfilled: false,
        error: payload.error.message,
      };
    case editProfile + fulfilled:
      return {
        ...prevState,
        isLoading: false,
        isError: false,
        isFulfilled: true,
        profile: {...prevState.profile, ...payload.data.data},
      };

    case editPassword + pending:
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case editPassword + rejected:
      return {
        ...prevState,
        isError: true,
        isLoading: false,
        isFulfilled: false,
        error: payload.error.message,
      };
    case editPassword + fulfilled:
      return {
        ...prevState,
        isLoading: false,
        isError: false,
        isFulfilled: true,
      };

    case userReset:
      return initialState;

    default:
      return prevState;
  }
};

export default userReducer;
