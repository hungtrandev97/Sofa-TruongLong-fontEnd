import { requestPost } from "../helpers/NetworkUtils";
import { END_POINT } from "../constants/DefaultValues";

export const apiLogin = async ({ userName, password }) => {
  const response = await requestPost({
    fullUrl: `${END_POINT}/v1/auth/loginCustomer`,
    params: {
      userName,
      password,
    },
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
    fullUrl: `${END_POINT}/auth/register`,
    params: user,
    bearerToken: null,
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
    data: response,
  };
};
