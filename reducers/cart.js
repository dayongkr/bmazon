const initialState = {
  items: null,
};

export const ADD_CART_REQUEST = 'ADD_CART_REQUEST';
export const ADD_CART_SUCCESS = 'ADD_CART_SUCCESS';
export const ADD_CART_FAILURE = 'ADD_CART_FAILURE';

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART_REQUEST: {
      return { ...state };
    }
    case ADD_CART_SUCCESS: {
      return { ...state };
    }
    case ADD_CART_FAILURE: {
      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
};
