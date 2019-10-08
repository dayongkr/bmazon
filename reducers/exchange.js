export const initialState = {
  exchange: {
    rate: '',
    date: '',
    time: '',
    provider: '',
  },
};

export const EXCHANGE_RATE_REQUEST = 'EXCHANGE_RATE_REQUEST';
export const EXCHANGE_RATE_SUCCESS = 'EXCHANGE_RATE_SUCCESS';
export const EXCHANGE_RATE_FAILURE = 'EXCHANGE_RATE_FAILURE';

export default (state = initialState, action) => {
  switch (action.type) {
    case EXCHANGE_RATE_REQUEST: {
      return {
        ...state,
      };
    }
    case EXCHANGE_RATE_SUCCESS: {
      window.localStorage.setItem('exchangeRate', JSON.stringify(action.data));
      return {
        ...state,
        rate: action.data.rate,
        date: action.data.date,
        time: action.data.time,
        provider: action.data.provider,
      };
    }
    case EXCHANGE_RATE_FAILURE: {
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
