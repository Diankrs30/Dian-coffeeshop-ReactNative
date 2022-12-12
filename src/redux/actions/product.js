import ACTION_STRING from './actionString';
import {getAllProduct} from '../../utils/product';

const getAllProductPending = () => ({
  type: ACTION_STRING.getAllProduct.concat(ACTION_STRING.pending),
});

const getAllProductRejected = error => ({
  type: ACTION_STRING.getAllProduct.concat(ACTION_STRING.rejected),
  payload: {error},
});

const getAllProductFulfilled = data => ({
  type: ACTION_STRING.getAllProduct.concat(ACTION_STRING.fulfilled),
  payload: {data},
});

const getAllProductThunk = param => {
  return async dispatch => {
    try {
      dispatch(getAllProductPending());
      const result = await getAllProduct(param);
      dispatch(getAllProductFulfilled(result.data));
      // if (typeof cbSuccess === 'function') {
      //   cbSuccess();
      // }
    } catch (error) {
      dispatch(getAllProductRejected(error));
      // if (typeof cbDenied === 'function') {
      //   cbDenied();
      // }
    }
  };
};

const productAction = {
  getAllProductThunk,
};

export default productAction;
