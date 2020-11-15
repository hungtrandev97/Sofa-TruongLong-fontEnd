import { requestPost } from "../helpers/NetworkUtils";
import { END_POINT, TYPE_NOTIFY } from "../constants/DefaultValues";

export const apiCreateCategory = async (data) => {
  const response = await requestPost({
    fullUrl: `${END_POINT}/v1/categoryRoutes/CreateCategory`,
    params: data,
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
