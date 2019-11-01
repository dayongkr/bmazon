export const initialState = {
  html: null,
  value: null,
  items: null,
  mdItems: null,
};

export const PRODUCT_LIST_REQUEST = 'PRODUCT_LIST_REQUEST';
export const PRODUCT_LIST_SUCCESS = 'PRODUCT_LIST_SUCCESS';
export const PRODUCT_LIST_FAILURE = 'PRODUCT_LIST_FAILURE';
export const PRODUCT_LIST_RESET = 'PRODUCT_LIST_RESET';

export const MD_PRODUCT_LIST_REQUEST = 'MD_PRODUCT_LIST_REQUEST';
export const MD_PRODUCT_LIST_SUCCESS = 'MD_PRODUCT_LIST_SUCCESS';
export const MD_PRODUCT_LIST_FAILURE = 'MD_PRODUCT_LIST_FAILURE';

export default (state = initialState, action) => {
  switch (action.type) {
    case MD_PRODUCT_LIST_REQUEST: {
      return {
        ...state,
      };
    }
    case MD_PRODUCT_LIST_SUCCESS: {
      return {
        ...state,
        mdItems: action.data,
      };
    }
    case MD_PRODUCT_LIST_FAILURE: {
      return {
        ...state,
      };
    }

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
