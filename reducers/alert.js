const initialState = {
  text: null,
  alerted: false,
  status: true,
};

export const CREATE_ALERT = 'CREATE_ALERT';
export const RESET_ALERT = 'RESET_ALERT';

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ALERT: {
      return {
        ...state,
        text: action.data.text,
        alerted: true,
        status: action.data.status,
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
