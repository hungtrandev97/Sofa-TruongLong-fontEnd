import { requestPost, requestGet } from "../helpers/NetworkUtils";
import {
  END_POINT,
  TYPE_NOTIFY,
  ACCESS_TOKEN_KEY,
} from "../constants/DefaultValues";

export const apiLogin = async (user) => {
  const response = await requestPost({
    fullUrl: `${END_POINT}/v1/auth/loginAcount`,
    params: user,
  });

  if (response.statusCode === 200) {
    const { body } = response;
    return {
      status: true,
      data: body,
    };
  }
  return {
    status: false,
    msg: "",
  };
};

export const apiRegister = async (user) => {
  const response = await requestPost({
    fullUrl: `${END_POINT}/v1/auth/register`,
    params: user,
    bearerToken: null,
  });
  if (response.statusCode === 200) {
    const { body } = response;
    return {
      status: true,
      type: TYPE_NOTIFY.SUCCESS,
      data: body,
    };
  }
  if (response.statusCode === 250) {
    return {
      status: false,
      type: TYPE_NOTIFY.WARNING,
      message: response.body.message,
    };
  }
  return {
    status: false,
    type: TYPE_NOTIFY.ERROR,
    message: "Email đã tồn tại",
    data: response,
  };
};

export const apiRegisterAdmin = async (concatData) => {
  const response = await requestPost({
    fullUrl: `${END_POINT}/v1/auth/registerAdmin`,
    params: concatData,
    bearerToken: localStorage.getItem(ACCESS_TOKEN_KEY),
  });
  if (response.statusCode === 200) {
    const { body } = response;
    return {
      status: true,
      type: TYPE_NOTIFY.SUCCESS,
      data: body,
    };
  }
  if (response.statusCode === 250) {
    return {
      status: false,
      type: TYPE_NOTIFY.WARNING,
      message: response.body.message,
    };
  }
  return {
    status: false,
    type: TYPE_NOTIFY.ERROR,
    message: "Email đã tồn tại",
    data: response,
  };
};
export const apiGetAllAccountAdmin = async () => {
  const response = await requestGet({
    fullUrl: `${END_POINT}/v1/auth/getAllAcountAdmin`,
    bearerToken: localStorage.getItem(ACCESS_TOKEN_KEY),
  });
  if (response.statusCode === 200) {
    const { body } = response;
    return {
      status: true,
      type: TYPE_NOTIFY.SUCCESS,
      data: body,
    };
  }
  if (response.statusCode === 250) {
    return {
      status: false,
      type: TYPE_NOTIFY.WARNING,
      message: response.body.message,
    };
  }
  return {
    status: false,
    type: TYPE_NOTIFY.ERROR,
    message: response.body.message,
    data: response,
  };
};
