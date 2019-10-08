export const initialState = {
  product: {
    imageUrl: '',
    url: '',
    asin: '',
    name: '',
    price: '',
    category: [],
    details: null,
  },
};

export const SET_PRODUCT_INFORMATION = 'SET_PRODUCT_INFORMATION';

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCT_INFORMATION: {
      return {
        ...state,
        imageUrl: action.data.imageUrl,
        url: action.data.url,
        asin: action.data.asin,
        name: action.data.name,
        price: action.data.price,
        category: action.data.category,
        details: action.data.details,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
