import ACTION_STRING from './actionString';
import {
  getAllProduct,
  getDetailProduct,
  getSizeProduct,
  editProduct,
  createProduct,
  getPromo,
  getPromoById,
  editPromo,
  createPromo,
  deleteProduct,
  deletePromo,
} from '../../utils/product';

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

const getDetailProductPending = () => ({
  type: ACTION_STRING.getDetailProduct.concat(ACTION_STRING.pending),
});

const getDetailProductRejected = error => ({
  type: ACTION_STRING.getDetailProduct.concat(ACTION_STRING.rejected),
  payload: {error},
});

const getDetailProductFulfilled = data => ({
  type: ACTION_STRING.getDetailProduct.concat(ACTION_STRING.fulfilled),
  payload: {data},
});

const getSizePending = () => ({
  type: ACTION_STRING.getSize.concat(ACTION_STRING.pending),
});

const getSizeRejected = error => ({
  type: ACTION_STRING.getSize.concat(ACTION_STRING.rejected),
  payload: {error},
});

const getSizeFulfilled = data => ({
  type: ACTION_STRING.getSize.concat(ACTION_STRING.fulfilled),
  payload: {data},
});

const editProductPending = () => ({
  type: ACTION_STRING.editProduct.concat(ACTION_STRING.pending),
});

const editProductRejected = error => ({
  type: ACTION_STRING.editProduct.concat(ACTION_STRING.rejected),
  payload: {error},
});

const editProductFulfilled = data => ({
  type: ACTION_STRING.editProduct.concat(ACTION_STRING.fulfilled),
  payload: {data},
});

const createProductPending = () => ({
  type: ACTION_STRING.createProduct.concat(ACTION_STRING.pending),
});

const createProductRejected = error => ({
  type: ACTION_STRING.createProduct.concat(ACTION_STRING.rejected),
  payload: {error},
});

const createProductFulfilled = data => ({
  type: ACTION_STRING.createProduct.concat(ACTION_STRING.fulfilled),
  payload: {data},
});

const getAllPromoPending = () => ({
  type: ACTION_STRING.getAllPromo.concat(ACTION_STRING.pending),
});

const getAllPromoRejected = error => ({
  type: ACTION_STRING.getAllPromo.concat(ACTION_STRING.rejected),
  payload: {error},
});

const getAllPromoFulfilled = data => ({
  type: ACTION_STRING.getAllPromo.concat(ACTION_STRING.fulfilled),
  payload: {data},
});

const getDetailPromoPending = () => ({
  type: ACTION_STRING.detailPromo.concat(ACTION_STRING.pending),
});

const getDetailPromoRejected = error => ({
  type: ACTION_STRING.detailPromo.concat(ACTION_STRING.rejected),
  payload: {error},
});

const getDetailPromoFulfilled = data => ({
  type: ACTION_STRING.detailPromo.concat(ACTION_STRING.fulfilled),
  payload: {data},
});

const editPromoPending = () => ({
  type: ACTION_STRING.editPromo.concat(ACTION_STRING.pending),
});

const editPromoRejected = error => ({
  type: ACTION_STRING.editPromo.concat(ACTION_STRING.rejected),
  payload: {error},
});

const editPromoFulfilled = data => ({
  type: ACTION_STRING.editPromo.concat(ACTION_STRING.fulfilled),
  payload: {data},
});

const createPromoPending = () => ({
  type: ACTION_STRING.createPromo.concat(ACTION_STRING.pending),
});

const createPromoRejected = error => ({
  type: ACTION_STRING.createPromo.concat(ACTION_STRING.rejected),
  payload: {error},
});

const createPromoFulfilled = data => ({
  type: ACTION_STRING.createPromo.concat(ACTION_STRING.fulfilled),
  payload: {data},
});

const deletePromoPending = () => ({
  type: ACTION_STRING.deletePromo.concat(ACTION_STRING.pending),
});

const deletePromoRejected = error => ({
  type: ACTION_STRING.deletePromo.concat(ACTION_STRING.rejected),
  payload: {error},
});

const deletePromoFulfilled = data => ({
  type: ACTION_STRING.deletePromo.concat(ACTION_STRING.fulfilled),
  payload: {data},
});

const deleteProductPending = () => ({
  type: ACTION_STRING.deleteProduct.concat(ACTION_STRING.pending),
});

const deleteProductRejected = error => ({
  type: ACTION_STRING.deleteProduct.concat(ACTION_STRING.rejected),
  payload: {error},
});

const deleteProductFulfilled = data => ({
  type: ACTION_STRING.deleteProduct.concat(ACTION_STRING.fulfilled),
  payload: {data},
});

const getAllProductThunk = param => {
  return async dispatch => {
    try {
      dispatch(getAllProductPending());
      const result = await getAllProduct(param);
      dispatch(getAllProductFulfilled(result.data));
      return result.data;
    } catch (error) {
      dispatch(getAllProductRejected(error));
    }
  };
};

const getDetailProductThunk = (id, token, cbSuccess) => {
  return async dispatch => {
    try {
      dispatch(getDetailProductPending());
      const result = await getDetailProduct(id, token);
      dispatch(getDetailProductFulfilled(result.data));
      if (typeof cbSuccess === 'function') {
        cbSuccess(result.data.data);
      }
    } catch (error) {
      dispatch(getDetailProductRejected(error));
    }
  };
};

const getSizeThunk = () => {
  return async dispatch => {
    try {
      dispatch(getSizePending());
      const result = await getSizeProduct();
      dispatch(getSizeFulfilled(result.data));
    } catch (error) {
      dispatch(getSizeRejected(error));
    }
  };
};

const editProductThunk = (body, id, token, cbSuccess, cbDenied) => {
  return async dispatch => {
    try {
      dispatch(editProductPending());
      const result = await editProduct(body, id, token);
      dispatch(editProductFulfilled(result.data));
      if (typeof cbSuccess === 'function') {
        cbSuccess();
      }
    } catch (error) {
      dispatch(editProductRejected(error));
      if (typeof cbDenied === 'function') {
        cbDenied();
      }
    }
  };
};

const createProductThunk = (body, token, cbSuccess, cbDenied) => {
  return async dispatch => {
    try {
      dispatch(createProductPending());
      const result = await createProduct(body, token);
      dispatch(createProductFulfilled(result.data));
      if (typeof cbSuccess === 'function') {
        cbSuccess();
      }
    } catch (error) {
      dispatch(createProductRejected(error));
      console.log(error);
      if (typeof cbDenied === 'function') {
        cbDenied();
      }
    }
  };
};

const getAllPromoThunk = param => {
  return async dispatch => {
    try {
      dispatch(getAllPromoPending());
      const result = await getPromo(param);
      dispatch(getAllPromoFulfilled(result.data));
    } catch (error) {
      dispatch(getAllPromoRejected(error));
      console.log(error);
    }
  };
};

const getDetailPromoThunk = (id, token) => {
  return async dispatch => {
    try {
      dispatch(getDetailPromoPending());
      const result = await getPromoById(id, token);
      dispatch(getDetailPromoFulfilled(result.data));
      // if (typeof cbSuccess === 'function') {
      //   cbSuccess(result.data.data);
      // }
      return result;
    } catch (error) {
      dispatch(getDetailPromoRejected(error));
      console.log(error);
    }
  };
};

const editPromoThunk = (body, id, token, cbSuccess, cbDenied) => {
  return async dispatch => {
    try {
      dispatch(editPromoPending());
      const result = await editPromo(body, id, token);
      dispatch(editPromoFulfilled(result.data));
      if (typeof cbSuccess === 'function') {
        cbSuccess();
      }
    } catch (error) {
      dispatch(editPromoRejected(error));
      if (typeof cbDenied === 'function') {
        cbDenied();
      }
    }
  };
};

const createPromoThunk = (body, token, cbSuccess, cbDenied) => {
  return async dispatch => {
    try {
      dispatch(createPromoPending());
      const result = await createPromo(body, token);
      dispatch(createPromoFulfilled(result.data));
      if (typeof cbSuccess === 'function') {
        cbSuccess();
      }
    } catch (error) {
      dispatch(createPromoRejected(error));
      console.log(error);
      if (typeof cbDenied === 'function') {
        cbDenied();
      }
    }
  };
};

const deletePromoThunk = (id, token, cbSuccess, cbDenied) => {
  return async dispatch => {
    try {
      dispatch(deletePromoPending());
      const result = await deletePromo(id, token);
      dispatch(deletePromoFulfilled(result.data));
      if (typeof cbSuccess === 'function') {
        cbSuccess();
      }
    } catch (error) {
      dispatch(deletePromoRejected(error));
      console.log(error);
      if (typeof cbDenied === 'function') {
        cbDenied();
      }
    }
  };
};

const deleteProductThunk = (id, token, cbSuccess, cbDenied) => {
  return async dispatch => {
    try {
      dispatch(deleteProductPending());
      const result = await deleteProduct(id, token);
      dispatch(deleteProductFulfilled(result.data));
      if (typeof cbSuccess === 'function') {
        cbSuccess();
      }
    } catch (error) {
      dispatch(deleteProductRejected(error));
      console.log(error);
      if (typeof cbDenied === 'function') {
        cbDenied();
      }
    }
  };
};

const productAction = {
  getAllProductThunk,
  getDetailProductThunk,
  getSizeThunk,
  editProductThunk,
  createProductThunk,
  getAllPromoThunk,
  getDetailPromoThunk,
  editPromoThunk,
  createPromoThunk,
  deleteProductThunk,
  deletePromoThunk,
};

export default productAction;
