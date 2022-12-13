import ACTION_STRING from '../actions/actionString';

const initialState = {
  userData: {
    id: null,
    name: null,
    role: null,
    token: null,
  },
  isLoading: false,
  isError: false,
  isFulfilled: false,
  error: null,
};

const authReducer = (prevState = initialState, {type, payload}) => {
  const {
    register,
    login,
    forgotPwd,
    resetPwd,
    logout,
    pending,
    rejected,
    fulfilled,
  } = ACTION_STRING;
  switch (type) {
    case register + pending:
      return {
        ...prevState,
        // isLoading: true,
        isLoading: false,
        isError: false,
        isFulfilled: false,
      };
    case register + rejected:
      return {
        ...prevState,
        isError: true,
        isLoading: false,
        isFulfilled: false,
        error: payload.error.response.data.status,
      };
    case register + fulfilled:
      return {
        ...prevState,
        isLoading: false,
        isError: false,
        isFulfilled: true,
      };

    case login + pending:
      return {
        ...prevState,
        // isLoading: true,
        isLoading: false,
        isError: false,
        isFulfilled: false,
      };
    case login + rejected:
      return {
        ...prevState,
        isError: true,
        isLoading: false,
        isFulfilled: false,
        error: payload.error.response.data.status,
        initialState,
      };

    case login + fulfilled:
      console.log('payload login', payload);
      return {
        ...prevState,
        isLoading: false,
        isError: false,
        isFulfilled: true,
        userData: {
          id: payload.data.data.id,
          name: payload.data.data.name,
          role: payload.data.data.role,
          token: payload.data.data.token,
        },
      };

    case forgotPwd + pending:
      return {
        ...prevState,
        // isLoading: true,
        isLoading: false,
        isError: false,
        isFulfilled: false,
      };
    case forgotPwd + rejected:
      return {
        ...prevState,
        isError: true,
        isLoading: false,
        isFulfilled: false,
        error: payload.error.response.data.status,
      };
    case forgotPwd + fulfilled:
      return {
        ...prevState,
        isLoading: false,
        isError: false,
        isFulfilled: true,
      };

    case resetPwd + pending:
      return {
        ...prevState,
        // isLoading: true,
        isLoading: false,
        isError: false,
        isFulfilled: false,
      };
    case resetPwd + rejected:
      return {
        ...prevState,
        isError: true,
        isLoading: false,
        error: payload.error.response.data.status,
      };
    case resetPwd + fulfilled:
      return {
        ...prevState,
        isLoading: false,
        isError: false,
        isFulfilled: true,
      };
    case logout + pending:
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case logout + rejected:
      return {
        ...prevState,
        isLoading: false,
        isError: true,
        isFulfilled: false,
        error: payload.error.response.data.status,
      };
    case logout + fulfilled:
      return initialState;

    default:
      return prevState;
  }
};

export default authReducer;
