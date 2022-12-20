import ACTION_STRING from '../actions/actionString';

const intialState = {
  product_item: [],
  subtotal: null,
  tax_and_fee: null,
  shipping_cost: null,
  address_detail: '',
  phone_number: '',
  payment_method: null,
  delivery_methods_id: null,
  set_time: '',
  status_order: '',
};

const updateCartReducer = (prevState = intialState, {type, payload}) => {
  const {updateCart, resetUpdateCart} = ACTION_STRING;
  switch (type) {
    case updateCart:
      return {
        ...prevState,
        product_item: payload.data.product_item,
        subtotal: payload.data.subtotal,
        tax_and_fee: payload.data.tax_and_fee,
        shipping_cost: payload.data.shipping_cost,
        address_detail: payload.data.address_detail,
        phone_number: payload.data.phone_number,
        payment_method: payload.data.payment_method,
        delivery_methods_id: payload.data.delivery_methods_id,
        set_time: payload.data.set_time,
        status_order: payload.data.status_order,
      };

    case resetUpdateCart:
      return intialState;

    default:
      return prevState;
  }
};

export default updateCartReducer;
