import { requestPost, requestGet } from "../helpers/NetworkUtils";
import {
  END_POINT,
  TYPE_NOTIFY,
  ACCESS_TOKEN_KEY,
} from "../constants/DefaultValues";

export const apiCreateOder = async (data) => {
  const response = await requestPost({
    fullUrl: `${END_POINT}/v1/cartRoutes/createCart`,
    params: data,
  });
  if (response.statusCode === 200) {
    const dataOder = response.body.data;
    return {
      status: true,
      type: TYPE_NOTIFY.SUCCESS,
      data: dataOder,
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

export const apiGetAllCart = async () => {
  const response = await requestGet({
    fullUrl: `${END_POINT}/v1/cartRoutes/getAllCart`,
  });
  if (response.statusCode === 200) {
    const CartData = response.body.data;
    return {
      status: true,
      type: TYPE_NOTIFY.SUCCESS,
      data: CartData,
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

export const apiUpdateStatus = async (id, dataUpdate) => {
  const response = await requestPost({
    fullUrl: `${END_POINT}/v1/cartRoutes/updateCartStatus?idCart=${id}`,
    params: dataUpdate,
  });
  if (response.statusCode === 200) {
    const dataUpdateStatus = response.body.data;
    return {
      status: true,
      type: TYPE_NOTIFY.SUCCESS,
      data: dataUpdateStatus,
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

export const apiEditOder = async (idOderUrl, DataEditOder) => {
  const response = await requestPost({
    fullUrl: `${END_POINT}/v1/cartRoutes/updateCart?idCart=${idOderUrl}`,
    params: DataEditOder,
  });
  if (response.statusCode === 200) {
    const EditOderData = response.body.data;
    return {
      status: true,
      type: TYPE_NOTIFY.SUCCESS,
      data: EditOderData,
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

export const apiRemoveOder = async (idOder) => {
  const response = await requestGet({
    fullUrl: `${END_POINT}/v1/cartRoutes/removeCart?idCart=${idOder}`,
    bearerToken: localStorage.getItem(ACCESS_TOKEN_KEY),
  });
  if (response.statusCode === 200) {
    const dataOder = response.body.message;
    return {
      status: true,
      type: TYPE_NOTIFY.SUCCESS,
      message: dataOder,
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

export const apiGetAllOderDetail = async (idOderDetailUrl) => {
  const response = await requestGet({
    fullUrl: `${END_POINT}/v1/cartRoutes/getAllCartDetail?carDetail=${idOderDetailUrl}`,
  });
  if (response.statusCode === 200) {
    const CartOderDetail = response.body.data;
    return {
      status: true,
      type: TYPE_NOTIFY.SUCCESS,
      data: CartOderDetail,
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
