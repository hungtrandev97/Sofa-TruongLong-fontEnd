import { requestPost, requestGet } from "../helpers/NetworkUtils";
import { END_POINT, TYPE_NOTIFY } from "../constants/DefaultValues";

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

export const apiGetAllSetting = async () => {
  const response = await requestGet({
    fullUrl: `${END_POINT}/v1/SettingRoutes/getAllSetting`,
  });
  if (response.statusCode === 200) {
    const dataSetting = response.body.data;
    return {
      status: true,
      type: TYPE_NOTIFY.SUCCESS,
      data: dataSetting,
    };
  }
  if (response.statusCode === 250) {
    return {
      status: true,
      type: TYPE_NOTIFY.WARNING,
    };
  }
  return {
    status: false,
    type: TYPE_NOTIFY.ERROR,
    message: response.body.message,
    data: response,
  };
};

export const apiEditSetting = async (dataEditSetting) => {
  const response = await requestPost({
    fullUrl: `${END_POINT}/v1/SettingRoutes/updateSetting`,
    params: dataEditSetting,
  });
  if (response.statusCode === 200) {
    const EditSettingData = response.body.data;
    return {
      status: true,
      type: TYPE_NOTIFY.SUCCESS,
      data: EditSettingData,
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
