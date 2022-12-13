import ACTION_STRING from './actionString';

const newCart = data => {
  console.log('update card', data);
  return {
    type: ACTION_STRING.updateCart,
    payload: {data},
  };
};

const updateCartAction = {
  newCart,
};

export default updateCartAction;
