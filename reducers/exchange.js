export const initialState = {
  exchange: {
    rate: '',
    date: '',
    time: '',
    provider: '',
  },
};

export const SET_EXCHANGE_RATE = 'SET_EXCHANGE_RATE';

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_EXCHANGE_RATE: {
      return {
        ...state,
        rate: action.data.rate,
        date: action.data.date,
        time: action.data.time,
        provider: action.data.provider,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
