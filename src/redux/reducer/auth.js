import ACTION_STRING from '../actions/actionString';

const initialState = {
  userData: {
    id: null,
    token: null,
    // pin: null,
  },
  isLoading: false,
  isError: false,
  isFulfilled: false,
  error: null,
};

const authReducer = (prevState = initialState, {type, payload}) => {
  const {register, pending, rejected, fulfilled} = ACTION_STRING;
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
        error: payload.error.response.data.status, //cek errornya ada dmana
      };
    case register + fulfilled:
      return {
        ...prevState,
        isLoading: false,
      };

    default:
      return prevState;
  }
};

export default authReducer;
