export const initialState = {
  imageUrl: null,
  url: null,
  asin: null,
  name: null,
  price: null,
  category: null,
  details: null,
  options: null,
  ship: null,
};

export const PRODUCT_INFORMATION_REQUEST = 'PRODUCT_INFORMATION_REQUEST';
export const PRODUCT_INFORMATION_SUCCESS = 'PRODUCT_INFORMATION_SUCCESS';
export const PRODUCT_INFORMATION_FAILURE = 'PRODUCT_INFORMATION_FAILURE';
export const PRODUCT_INFORMATION_RESET = 'PRODUCT_INFORMATION_RESET';

export const PRODUCT_OPTION_INFORMATION_REQUEST =
  'PRODUCT_OPTION_INFORMATION_REQUEST';
export const PRODUCT_OPTION_INFORMATION_SUCCESS =
  'PRODUCT_OPTION_INFORMATION_SUCCESS';
export const PRODUCT_OPTION_INFORMATION_FAILURE =
  'PRODUCT_OPTION_INFORMATION_FAILURE';

export default (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_INFORMATION_REQUEST: {
      return {
        ...state,
        url: action.data.url,
        asin: action.data.asin,
      };
    }
    case PRODUCT_INFORMATION_SUCCESS: {
      return {
        ...state,
        imageUrl: action.data.imageUrl,
        name: action.data.name,
        price: action.data.price,
        category: action.data.category,
        details: action.data.details,
        options: action.data.options,
        ship: action.data.ship,
      };
    }
    case PRODUCT_INFORMATION_FAILURE: {
      return {
        ...state,
      };
    }
    case PRODUCT_INFORMATION_RESET: {
      return {
        ...state,
        imageUrl: null,
        url: null,
        asin: null,
        name: null,
        price: null,
        category: null,
        details: null,
        ship: null,
      };
    }
    case PRODUCT_OPTION_INFORMATION_REQUEST: {
      return {
        ...state,
      };
    }
    case PRODUCT_OPTION_INFORMATION_SUCCESS: {
      const option = state.options.option;
      const currentIndex = option.findIndex(
        item => item.asin === action.data.asin,
      );
      option[currentIndex].imageUrl = action.data.imageUrl;
      return {
        ...state,
        options: {
          ...state.options,
          option: [...option],
        },
      };
    }
    case PRODUCT_OPTION_INFORMATION_FAILURE: {
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
