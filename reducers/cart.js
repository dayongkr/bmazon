const initialState = {
  items: null,
  addCartErrorReason: '',
  getCartErrorReason: '',
  deleteCartErrorReason: '',
  updateCartErrorReason: '',
};

export const UPDATE_CART_REQUEST = 'UPDATE_CART_REQUEST';
export const UPDATE_CART_SUCCESS = 'UPDATE_CART_SUCCESS';
export const UPDATE_CART_FAILURE = 'UPDATE_CART_FAILURE';

export const ADD_CART_REQUEST = 'ADD_CART_REQUEST';
export const ADD_CART_SUCCESS = 'ADD_CART_SUCCESS';
export const ADD_CART_FAILURE = 'ADD_CART_FAILURE';

export const GET_CART_REQUEST = 'GET_CART_REQUEST';
export const GET_CART_SUCCESS = 'GET_CART_SUCCESS';
export const GET_CART_FAILURE = 'GET_CART_FAILURE';

export const DELETE_CART_REQUEST = 'DELETE_CART_REQUEST';
export const DELETE_CART_SUCCESS = 'DELETE_CART_SUCCESS';
export const DELETE_CART_FAILURE = 'DELETE_CART_FAILURE';

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CART_REQUEST: {
      return { ...state };
    }
    case UPDATE_CART_SUCCESS: {
      return {
        ...state,
        items: state.items.map(item => {
          if (item.asin === action.data.asin) {
            item.count = action.data.count;
            return item;
          }
          return item;
        }),
      };
    }
    case UPDATE_CART_FAILURE: {
      return { ...state, updateCartErrorReason: action.error };
    }
    case DELETE_CART_REQUEST: {
      return { ...state };
    }
    case DELETE_CART_SUCCESS: {
      return {
        ...state,
        items:
          state.items && state.items.filter(item => item.asin !== action.data),
      };
    }
    case DELETE_CART_FAILURE: {
      return { ...state, deleteCartErrorReason: action.error };
    }
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
