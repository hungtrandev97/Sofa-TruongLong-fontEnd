import { requestPost } from "../helpers/NetworkUtils";
import {
  END_POINT,
  TYPE_NOTIFY,
  ACCESS_TOKEN_KEY,
} from "../constants/DefaultValues";

export const apiCreateOder = async (data) => {
  const response = await requestPost({
    fullUrl: `${END_POINT}/v1/cartRoutes/createCart`,
    params: data,
    bearerToken: localStorage.getItem(ACCESS_TOKEN_KEY),
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

export const api = () => {};
