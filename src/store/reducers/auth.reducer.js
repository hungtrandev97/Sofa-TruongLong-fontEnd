import { LOGIN_USER_SUCCESS, LOGIN_USER_FAILED  } from "../actions/actions";
import { ACCESS_TOKEN_KEY } from "../../constants/DefaultValue";
import {
  LOGIN_USER,
} from "../actions/actions";

const INIT_STATE = {
  loginUser: {
    accessToken: "",
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
      return {
        ...state,
        loadingLogin: true,
        errorLogin: false,
      };
    case LOGIN_USER_SUCCESS: {
      const { user } = action.payload;
      localStorage.setItem(ACCESS_TOKEN_KEY, action.payload.token.accessToken);
      return {
        ...state,
        loginUser: {
          accessToken: action.payload.token.accessToken,
          role: user.role,
          userId: user.id,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
        },
        loadingLogin: false,
        errorLogin: false,
      };
    }
    case LOGIN_USER_FAILED:
      return { ...state, loadingLogin: false, errorLogin: true };
    default:
      return state;
  }   
}

export default authReducer;