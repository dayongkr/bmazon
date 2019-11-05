const initialState = {
  text: null,
  alerted: false,
  timeout: null,
};

export const CREATE_ALERT_REQUEST = 'CREATE_ALERT_REQUEST';
export const CREATE_ALERT = 'CREATE_ALERT';
export const RESET_ALERT = 'RESET_ALERT';

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ALERT_REQUEST: {
      return { ...state };
    }
    case CREATE_ALERT: {
      return {
        ...state,
        text: action.data.text,
        alerted: true,
        timeout: action.data.timeout,
      };
    }
    case RESET_ALERT: {
      return { ...state, alerted: false };
    }

    default: {
      return { ...state };
    }
  }
};
