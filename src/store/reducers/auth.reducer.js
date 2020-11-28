import { ACCESS_TOKEN_KEY } from "../../constants/DefaultValues";
import {
  RELOAD_LOGIN,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
  LOGOUT_USER,
  REGISTER_SUCCESS,
  ACOUNT_ADMIN_SUCCESS,
  ACOUNT_CONSUMER_SUCCESS,
} from "../actions/actions";

const INIT_STATE = {
  loadingLogin: false,
  errorLogin: false,
  loginUser: {},
  dataAcountAdmin: [],
  dataAcountConsumer: [],
};

const authReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        loadingLogin: true,
        errorLogin: false,
      };
    case RELOAD_LOGIN:
      return {
        ...state,
        errorLogin: false,
      };

    case LOGIN_USER_SUCCESS: {
      const { user, token } = action.payload;
      localStorage.setItem(ACCESS_TOKEN_KEY, action.payload.token.accessToken);
      return {
        ...state,
        loginUser: {
          accessToken: token.accessToken,
          role: user.role,
          userId: user.id,
          email: user.email,
          userName: user.userName,
          gender: user.gender,
          address: user.address,
          numberPhone: user.numberPhone,
          numberPoint: user.numberPoint,
        },
        loadingLogin: false,
        errorLogin: false,
      };
    }
    case LOGIN_USER_FAILED:
      return { ...state, loadingLogin: false, errorLogin: true };
    case LOGOUT_USER: {
      localStorage.removeItem(ACCESS_TOKEN_KEY);
      return { ...state, loginUser: null };
    }

    case REGISTER_SUCCESS: {
      const { user, token } = action.payload;
      localStorage.setItem(ACCESS_TOKEN_KEY, token.accessToken);
      return {
        ...state,
        loginUser: {
          accessToken: token.accessToken,
          role: user.role,
          userId: user.id,
          email: user.email,
          userName: user.userName,
          gender: user.gender,
          address: user.address,
          numberPhone: user.numberPhone,
          numberPoint: user.numberPoint,
        },
      };
    }
    // admin
    case ACOUNT_ADMIN_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        dataAcountAdmin: data,
      };
    }
    // Consumer
    case ACOUNT_CONSUMER_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        dataAcountConsumer: data,
      };
    }
    default:
      return state;
  }
};

export default authReducer;
