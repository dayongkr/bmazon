export const initialState = {
  product: {
    imageUrl: '',
    url: '',
    asin: '',
    name: '',
    price: '',
    category: [],
    details: '',
  },
};

export const SET_PRODUCT_INFORMATION = 'SET_PRODUCT_INFORMATION';

export const PRODUCT_INFORMATION_REQUEST = 'PRODUCT_INFORMATION_REQUEST';
export const PRODUCT_INFORMATION_SUCCESS = 'PRODUCT_INFORMATION_SUCCESS';
export const PRODUCT_INFORMATION_FAILURE = 'PRODUCT_INFORMATION_FAILURE';

export default (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_INFORMATION_REQUEST: {
      return {
        ...state,
        url: action.data,
      };
    }
    case PRODUCT_INFORMATION_SUCCESS: {
      return {
        ...state,
        imageUrl: action.data.imageUrl,
        asin: action.data.asin,
        name: action.data.name,
        price: action.data.price,
        category: action.data.category,
        details: action.data.details,
      };
    }
    case PRODUCT_INFORMATION_FAILURE: {
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
