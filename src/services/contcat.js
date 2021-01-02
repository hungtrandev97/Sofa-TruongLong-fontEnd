import { requestPost, requestGet } from "../helpers/NetworkUtils";
import { END_POINT, TYPE_NOTIFY } from "../constants/DefaultValues";

export const apiSendContact = async (dataContact) => {
  const response = await requestPost({
    fullUrl: `${END_POINT}/v1/contactRoutes/sendContact`,
    params: dataContact,
  });
  if (response.statusCode === 200) {
    const ContactData = response.body.data;
    return {
      status: true,
      type: TYPE_NOTIFY.SUCCESS,
      data: ContactData,
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

export const apiGetAllCategory = async () => {
  const response = await requestGet({
    fullUrl: `${END_POINT}/v1/contactRoutes/getAllContact`,
  });
  if (response.statusCode === 200) {
    const ContactData = response.body.data;
    return {
      status: true,
      type: TYPE_NOTIFY.SUCCESS,
      data: ContactData,
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
