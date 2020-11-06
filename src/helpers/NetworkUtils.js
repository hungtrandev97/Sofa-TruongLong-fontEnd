import axios from "axios";
import { ACCESS_TOKEN_KEY } from "../constants/DefaultValues";
// import configureStore from "../store/store";
// import { logoutUser } from "../store/actions/auth.actions";

const requestHttp = async ({ method, fullUrl, params, bearerToken }) => {
  const headers = {
    // Accept: "application/json",
    // "Content-Type": "application/json",
    // "Access-Control-Allow-Origin": "*",
    // "Access-Control-Allow-Credentials": true,
  };
  try {
    if (bearerToken) {
      // Source: https://medium.com/swlh/handling-access-and-refresh-tokens-using-axios-interceptors-3970b601a5da
      // Add a request interceptor
      axios.interceptors.request.use(
        (config) => {
          const token = localStorage.getItem(ACCESS_TOKEN_KEY);
          if (token && bearerToken !== null) {
            // eslint-disable-next-line no-param-reassign
            config.headers.Authorization = `Bearer ${token}`;
          }
          return config;
        },
        (error) => {
          Promise.reject(error);
        }
      );
      // Add a response interceptor
      axios.interceptors.response.use(
        (response) => response,
        async (error) => {
          // const originalRequest = error.config;
          if (
            error.response.status &&
            (error.response.status === 401 || error.response.status === 403)
            // originalRequest.url === `${END_POINT}/auth/refresh-token`
          ) {
            // todo un-comment
            localStorage.removeItem(ACCESS_TOKEN_KEY);
            // const store = configureStore();
            // store.dispatch(logoutUser());
            window.location.reload();
            return Promise.reject(error);
          }
          return Promise.reject(error);
        }
      );
    }
    const response = await axios({
      method,
      url: fullUrl,
      data: JSON.stringify(params),
      headers,
    });
    return {
      statusCode: response.status,
      body: response.data,
    };
  } catch (error) {
    let errorMsg = "";
    if (error.response && error.response.status) {
      return {
        statusCode: error.response.status,
        body: error.response.data,
      };
    }
    if (error.request) {
      errorMsg = error.request;
    } else {
      errorMsg = error.message;
    }
    return {
      statusCode: 500,
      body: { message: errorMsg },
    };
  }
};

export const requestGet = ({ fullUrl, bearerToken }) => {
  return requestHttp({
    method: "GET",
    fullUrl,
    params: null,
    bearerToken,
  });
};

export const requestPost = ({ fullUrl, params, bearerToken }) => {
  return requestHttp({
    method: "POST",
    fullUrl,
    params,
    bearerToken,
  });
};

export const requestPut = ({ fullUrl, params, bearerToken }) => {
  return requestHttp({
    method: "PUT",
    fullUrl,
    params,
    bearerToken,
  });
};

export const requestPatch = ({ fullUrl, params, bearerToken }) => {
  return requestHttp({
    method: "PATCH",
    fullUrl,
    params,
    bearerToken,
  });
};

export const requestDelete = ({ fullUrl, params, bearerToken }) => {
  return requestHttp({
    method: "DELETE",
    fullUrl,
    params,
    bearerToken,
  });
};
