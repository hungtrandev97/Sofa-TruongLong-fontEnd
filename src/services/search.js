import { requestGet } from "../helpers/NetworkUtils";
import { END_POINT, TYPE_NOTIFY } from "../constants/DefaultValues";

export const apiGetAllSearch = async (dataSearch) => {
  const response = await requestGet({
    fullUrl: `${END_POINT}/v1/ProductRoutes/SearchProduct?search=${dataSearch}`,
  });
  if (response.statusCode === 200) {
    const SearchData = response;
    return {
      status: true,
      type: TYPE_NOTIFY.SUCCESS,
      data: SearchData,
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

export const api = async () => {};
