export const initialState = {
  html: null,
  value: null,
  items: null,
};

export const PRODUCT_LIST_REQUEST = 'PRODUCT_LIST_REQUEST';
export const PRODUCT_LIST_SUCCESS = 'PRODUCT_LIST_SUCCESS';
export const PRODUCT_LIST_FAILURE = 'PRODUCT_LIST_FAILURE';
export const PRODUCT_LIST_RESET = 'PRODUCT_LIST_RESET';

export default (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST: {
      return {
        ...state,
        value: action.data.value,
      };
    }
    case PRODUCT_LIST_SUCCESS: {
      return {
        ...state,
        items: action.data.items,
      };
    }
    case PRODUCT_LIST_FAILURE: {
      return {
        ...state,
      };
    }
    case PRODUCT_LIST_RESET: {
      return {
        ...state,
        html: null,
        value: null,
        items: null,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
