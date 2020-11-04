import { requestPost } from "../helpers/NetworkUtils";
import {
  END_POINT,
} from "../constants/DefaultValue";

export const apiLogin = async (user) => {
  const response = await requestPost({
    fullUrl: `${END_POINT}/auth/login`,
    params: { email: user.email, password: user.password },
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