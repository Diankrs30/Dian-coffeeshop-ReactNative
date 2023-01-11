import ACTION_STRING from '../actions/actionString';

const initialState = {
  profile: {
    delivery_address: '',
    display_name: '',
    first_name: '',
    last_name: '',
    date_of_birth: '',
    gender: '',
    image: '',
    email: '',
    phone_number: '',
  },
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
      console.log(payload.data.data[0]);
      return {
        ...prevState,
        isLoading: false,
        isError: false,
        isFulfilled: true,
        profile: {
          delivery_address: payload.data.data[0].delivery_address,
          display_name: payload.data.data[0].display_name,
          first_name: payload.data.data[0].first_name,
          last_name: payload.data.data[0].last_name,
          date_of_birth: payload.data.data[0].date_of_birth,
          gender: payload.data.data[0].gender,
          image: payload.data.data[0].image,
          email: payload.data.data[0].email,
          phone_number: payload.data.data[0].phone_number,
        },
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
        error: payload.error.response.data.status,
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
        error: payload.error.response.data.status,
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
