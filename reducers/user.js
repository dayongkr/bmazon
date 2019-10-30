export const initialState = {
  isRegistered: false,
  isRegistering: false,
  registerErrorReason: '',
  isLoggingIn: false,
  logInErrorReason: '',
  me: null,
  isLoading: false,
  isLoggingOut: false,
  logOutErrorReason: '',
};

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';

export const LOAD_USER_REQUEST = 'LOAD_USER_REQUEST';
export const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
export const LOAD_USER_FAILURE = 'LOAD_USER_FAILURE';

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';
export const REGISTER_RESET = 'REGISTER_RESET';

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USER_REQUEST: {
      return {
        ...state,
      };
    }

    case LOAD_USER_SUCCESS: {
      return { ...state, me: action.data };
    }

    case LOAD_USER_FAILURE: {
      return {
        ...state,
      };
    }

    case LOG_OUT_REQUEST: {
      return {
        ...state,
        isLoggingOut: true,
      };
    }

    case LOG_OUT_SUCCESS: {
      return {
        ...state,
        isLoggingOut: false,
        me: null,
      };
    }

    case LOG_OUT_FAILURE: {
      return {
        ...state,
        isLoggingOut: false,
        logOutErrorReason: action.error,
      };
    }

    case LOG_IN_REQUEST: {
      return {
        ...state,
        isLoggingIn: true,
        logInErrorReason: '',
      };
    }

    case LOG_IN_SUCCESS: {
      return {
        ...state,
        isLoggingIn: false,
        me: action.data,
        isLoading: false,
        logInErrorReason: '',
      };
    }
    case LOG_IN_FAILURE: {
      return {
        ...state,
        isLoggingIn: false,
        logInErrorReason: action.error,
        me: null,
      };
    }
    case REGISTER_REQUEST: {
      return {
        ...state,
        isRegistering: true,
        isRegistered: false,
        registerErrorReason: '',
      };
    }
    case REGISTER_SUCCESS: {
      return {
        ...state,
        isRegistering: false,
        isRegistered: true,
      };
    }
    case REGISTER_FAILURE: {
      return {
        ...state,
        isRegistering: false,
        registerErrorReason: action.error,
      };
    }
    case REGISTER_RESET: {
      return {
        ...state,
        isRegistered: false,
        isRegistering: false,
        registerErrorReason: '',
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
