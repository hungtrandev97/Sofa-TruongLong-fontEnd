import { ACCESS_TOKEN_KEY } from "../../constants/DefaultValues";
import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
  LOGOUT_USER,
  REGISTER_SUCCESS,
  AUTH_RESET_STATUS_LOGIN,
} from "../actions/actions";

const INIT_STATE = {
  loginUser: {
    accessToken: "",
    role: "",
    userId: "",
    email: "",
    userName: "",
    gender: "",
    address: "",
    numberPhone: "",
    numberPoint: "",
  },
  loadingLogin: false,
  errorLogin: false,
  loadingLogout: false,
  loadingRegister: false,
  errorRegister: false,
};

const authReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case LOGIN_USER:
      console.log(action.payload, "admin");
      return {
        ...state,
        loadingLogin: true,
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
    case AUTH_RESET_STATUS_LOGIN: {
      return {
        ...state,
        loadingLogin: false,
        errorLogin: false,
      };
    }
    default:
      return state;
  }
};

export default authReducer;
