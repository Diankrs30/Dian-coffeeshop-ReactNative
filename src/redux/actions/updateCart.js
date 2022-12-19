import ACTION_STRING from './actionString';

const newCart = data => {
  console.log('update cart', data);
  return {
    type: ACTION_STRING.updateCart,
    payload: {data},
  };
};

const updateCartReset = () => {
  return {
    type: ACTION_STRING.resetUpdateCart,
  };
};

const updateCartAction = {
  newCart,
  updateCartReset,
};

export default updateCartAction;
