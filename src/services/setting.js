import { requestPost } from "../helpers/NetworkUtils";
import { END_POINT } from "../constants/DefaultValues";

export const apiCountNumberOnline = async () => {
  const response = await requestPost({
    fullUrl: `${END_POINT}/v1/SettingRoutes/updatePoind`,
  });
  if (response.statusCode === 200) {
    const dataProduct = response.body.data;
    return {
      status: true,
      data: dataProduct,
    };
  }
};
