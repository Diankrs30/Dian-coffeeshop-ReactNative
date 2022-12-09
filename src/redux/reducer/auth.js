import ACTION_STRING from '../actions/actionString';

const initialState = {
  userData: {
    id: null,
    token: null,
  },
  isLoading: false,
  isError: false,
  isFulfilled: false,
  error: null,
};

const authReducer = (prevState = initialState, {type, payload}) => {
  const {register, login, pending, rejected, fulfilled} = ACTION_STRING;
  switch (type) {
    case register + pending:
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case register + rejected:
      return {
        ...prevState,
        isError: true,
        isLoading: false,
        error: payload.error.response.data.status,
      };
    case register + fulfilled:
      return {
        ...prevState,
        isLoading: false,
      };

    case login + pending:
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case login + rejected:
      return {
        ...prevState,
        isError: true,
        isLoading: false,
        error: payload.error.response.data.status,
      };

    case login + fulfilled:
      console.log('payload login', payload);
      return {
        ...prevState,
        isLoading: false,
        userData: {
          id: payload.data.data.id,
          token: payload.data.data.token,
        },
      };

    default:
      return prevState;
  }
};

export default authReducer;
