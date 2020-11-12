export const LOGIN_USER = "LOGIN_USER";
export const REGISTER_USER = "REGISTER_USER";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAILED = "LOGIN_USER_FAILED";
export const LOGOUT_USER = "LOGOUT_USER";
export const LOGOUT_USER_SUCCESS = "LOGOUT_USER_SUCCESS";
export const LOGOUT_USER_FAILED = "LOGOUT_USER_FAILED";
export const AUTH_REGISTER_SUCCESS = "AUTH_REGISTER_SUCCESS";
export const AUTH_RESET_STATUS_LOGIN = "AUTH_RESET_STATUS_LOGIN";

export const loginUser = (user) => ({
  type: LOGIN_USER,
  payload: { user },
});

export const register = (user) => ({
  type: REGISTER_USER,
  payload: { user },
});

export const loginUserSuccess = (user, token) => ({
  type: LOGIN_USER_SUCCESS,
  payload: { user, token },
});

export const loginUserFailed = () => ({
  type: LOGIN_USER_FAILED,
  payload: {},
});

export const logoutUser = () => ({
  type: LOGOUT_USER,
  payload: {},
});

export const logoutUserSuccess = () => ({
  type: LOGOUT_USER_SUCCESS,
  payload: {},
});

export const logoutUserFailed = () => ({
  type: LOGOUT_USER_FAILED,
  payload: {},
});

export const authRegisterSuccess = ({ user, token }) => ({
  type: AUTH_REGISTER_SUCCESS,
  payload: { user, token },
});

export const authResetStatusLogin = () => ({
  type: AUTH_RESET_STATUS_LOGIN,
  payload: {},
});
