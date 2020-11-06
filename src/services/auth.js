import { requestPost } from "../helpers/NetworkUtils";
import { END_POINT } from "../constants/DefaultValues";

export const apiLogin = async (user) => {
  const response = await requestPost({
    fullUrl: `${END_POINT}/auth/login`,
    params: { email: user.email, password: user.password, role: user.role },
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
