import { requestPost, requestGet, requestPut } from "../helpers/NetworkUtils";
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
    const dataAcountAdmin = response.body.data;
    return {
      status: true,
      type: TYPE_NOTIFY.SUCCESS,
      data: dataAcountAdmin,
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
    const dataAcountAdmin = response.body.data;
    return {
      status: true,
      type: TYPE_NOTIFY.SUCCESS,
      data: dataAcountAdmin,
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
export const apiGetAllAcountCustomer = async () => {
  const response = await requestGet({
    fullUrl: `${END_POINT}/v1/auth/getAllAcountUser`,
    bearerToken: localStorage.getItem(ACCESS_TOKEN_KEY),
  });
  if (response.statusCode === 200) {
    const dataAcountConsumer = response.body.data;
    return {
      status: true,
      type: TYPE_NOTIFY.SUCCESS,
      data: dataAcountConsumer,
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
export const apiEditAccountAdmin = async (value, idAccount) => {
  const response = await requestPut({
    fullUrl: `${END_POINT}/v1/auth/editAcount?id_acount=${idAccount}`,
    params: value,
    bearerToken: localStorage.getItem(ACCESS_TOKEN_KEY),
  });
  if (response.statusCode === 200) {
    const dataAcountAdmin = response.body.data;
    return {
      status: true,
      type: TYPE_NOTIFY.SUCCESS,
      data: dataAcountAdmin,
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
  };
};
export const apiDeleteAccount = async (idAccount) => {
  const response = await requestGet({
    fullUrl: `${END_POINT}/v1/auth/removeAcount?id_acount=${idAccount}`,
    bearerToken: localStorage.getItem(ACCESS_TOKEN_KEY),
  });
  if (response.statusCode === 200) {
    const dataAcount = response.body.data;
    return {
      status: true,
      type: TYPE_NOTIFY.SUCCESS,
      data: dataAcount,
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
  };
};
