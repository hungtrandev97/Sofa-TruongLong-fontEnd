import { requestGet, requestPost } from "../helpers/NetworkUtils";
import {
  END_POINT,
  TYPE_NOTIFY,
  ACCESS_TOKEN_KEY,
} from "../constants/DefaultValues";

export const apiCreateProduct = async (data) => {
  const response = await requestPost({
    fullUrl: `${END_POINT}/v1/ProductRoutes/CreateProduct`,
    params: data,
    bearerToken: localStorage.getItem(ACCESS_TOKEN_KEY),
  });
  if (response.statusCode === 200) {
    const dataProduct = response.body.data;
    return {
      status: true,
      type: TYPE_NOTIFY.SUCCESS,
      data: dataProduct,
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

export const apiEditProduct = async (data, id) => {
  const response = await requestPost({
    fullUrl: `${END_POINT}/v1/ProductRoutes/EditProduct?id_product=${id}`,
    params: data,
    bearerToken: localStorage.getItem(ACCESS_TOKEN_KEY),
  });
  if (response.statusCode === 200) {
    const dataProduct = response.body.data;
    return {
      status: true,
      type: TYPE_NOTIFY.SUCCESS,
      data: dataProduct,
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

export const apiDeleteProduct = async (idProduct) => {
  const response = await requestGet({
    fullUrl: `${END_POINT}/v1/ProductRoutes/RemoveProduct?id_product=${idProduct}`,
    bearerToken: localStorage.getItem(ACCESS_TOKEN_KEY),
  });
  if (response.statusCode === 200) {
    const dataProduct = response.body.data;
    return {
      status: true,
      type: TYPE_NOTIFY.SUCCESS,
      data: dataProduct,
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
  };
};
export const apiGetAllProduct = async () => {
  const response = await requestGet({
    fullUrl: `${END_POINT}/v1/ProductRoutes/GetAllProduct`,
  });
  if (response.statusCode === 200) {
    const dataProduct = response.body.data;
    return {
      status: true,
      type: TYPE_NOTIFY.SUCCESS,
      data: dataProduct,
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
  };
};

export const getAllProductIndex = async () => {
  const response = await requestGet({
    fullUrl: `${END_POINT}/v1/ProductRoutes/GetAllProductNew`,
  });
  if (response.statusCode === 200) {
    const { body } = response;
    return {
      status: true,
      type: TYPE_NOTIFY.SUCCESS,
      data: body.data,
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

export const getAllProductNew = async () => {
  const response = await requestGet({
    fullUrl: `${END_POINT}/v1/ProductRoutes/GetAllProductNew`,
  });

  if (response.statusCode === 200) {
    const { body } = response;
    return {
      status: true,
      type: TYPE_NOTIFY.SUCCESS,
      data: body.data,
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

export const apiGetAllProductSale = async () => {
  const response = await requestGet({
    fullUrl: `${END_POINT}/v1/ProductRoutes/GetAllProductPriceSale`,
  });
  if (response.statusCode === 200) {
    const { body } = response;
    return {
      status: true,
      type: TYPE_NOTIFY.SUCCESS,
      data: body.data,
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

export const apiGetAllScreeningPrice = async (priceProduct) => {
  const response = await requestGet({
    fullUrl: `${END_POINT}/v1/ProductRoutes/GetAllProductPrice`,
    params: priceProduct,
  });
  if (response.statusCode === 200) {
    const { body } = response;
    return {
      status: true,
      type: TYPE_NOTIFY.SUCCESS,
      data: body.data,
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

export const apiGetAllProductCategory = async (idCategory) => {
  const response = await requestGet({
    fullUrl: `${END_POINT}/v1/ProductRoutes/GetAllProductCategory?id_category=${idCategory}`,
  });
  if (response.statusCode === 200) {
    const { body } = response;
    return {
      status: true,
      type: TYPE_NOTIFY.SUCCESS,
      data: body.data,
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
