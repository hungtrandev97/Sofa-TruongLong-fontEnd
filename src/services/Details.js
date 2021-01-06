import { requestGet } from "../helpers/NetworkUtils";
import { END_POINT, TYPE_NOTIFY } from "../constants/DefaultValues";

export const apiGetAllDetail = async (idProductOneURL) => {
  const response = await requestGet({
    fullUrl: `${END_POINT}/v1/ProductRoutes/GetOneProduct?id_product=${idProductOneURL}`,
  });
  if (response.statusCode === 200) {
    const DetailOne = response.body.data;
    return {
      status: true,
      type: TYPE_NOTIFY.SUCCESS,
      data: DetailOne,
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
