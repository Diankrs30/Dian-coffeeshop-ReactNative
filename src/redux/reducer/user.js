import ACTION_STRING from '../actions/actionString';

const initialState = {
  profile: {},
  isLoading: false,
  isError: false,
  isFulfilled: false,
  error: null,
};

const userReducer = (prevState = initialState, {type, payload}) => {
  const {getProfile, pending, rejected, fulfilled} = ACTION_STRING;
  switch (type) {
    case getProfile + pending:
      return {
        ...prevState,
        isLoading: true,
        // isLoading: false,
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

    default:
      return prevState;
  }
};

export default userReducer;
