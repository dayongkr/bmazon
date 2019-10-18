export const initialState = {
  html: null,
  value: '',
  items: null,
};

export const PRODUCT_LIST_REQUEST = 'PRODUCT_LIST_REQUEST';
export const PRODUCT_LIST_SUCCESS = 'PRODUCT_LIST_SUCCESS';
export const PRODUCT_LIST_FAILURE = 'PRODUCT_LIST_FAILURE';

export default (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST: {
      return {
        ...state,
        value: action.data.value,
      };
      break;
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
    default: {
      return {
        ...state,
      };
    }
  }
};
