const initialState = {
  items: null,
  addCartErrorReason: '',
  getCartErrorReason: '',
};

export const ADD_CART_REQUEST = 'ADD_CART_REQUEST';
export const ADD_CART_SUCCESS = 'ADD_CART_SUCCESS';
export const ADD_CART_FAILURE = 'ADD_CART_FAILURE';

export const GET_CART_REQUEST = 'GET_CART_REQUEST';
export const GET_CART_SUCCESS = 'GET_CART_SUCCESS';
export const GET_CART_FAILURE = 'GET_CART_FAILURE';

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART_REQUEST: {
      return { ...state };
    }
    case ADD_CART_SUCCESS: {
      return { ...state };
    }
    case ADD_CART_FAILURE: {
      return { ...state, addCartErrorReason: action.error };
    }
    case GET_CART_REQUEST: {
      return { ...state };
    }
    case GET_CART_SUCCESS: {
      return { ...state, items: action.data };
    }
    case GET_CART_FAILURE: {
      return { ...state, getCartErrorReason: action.error };
    }
    default: {
      return { ...state };
    }
  }
};
