export const CREATE_PRODUCT = "CREATE_PRODUCT";
export const CREATE_PRODUCT_SUCCESS = "CREATE_PRODUCT_SUCCESS";
export const CREATE_PRODUCT_FAILED = "CREATE_PRODUCT_FAILED";
export const GET_ALL_PRODUCT = "GET_ALL_PRODUCT";
export const GET_ALL_PRODUCT_SUCCESS = "GET_ALL_PRODUCT_SUCCESS";
export const GET_ALL_PRODUCT_FAILED = "GET_ALL_PRODUCT_FAILED";

export const getAllProduct = () => ({
  type: GET_ALL_PRODUCT,
  payload: {},
});
export const getAllProductSuccess = ({ data }) => ({
  type: GET_ALL_PRODUCT_SUCCESS,
  payload: { data },
});

export const getAllProductFailed = () => ({
  type: GET_ALL_PRODUCT_FAILED,
  payload: {},
});

export const createProduct = (data) => ({
  type: CREATE_PRODUCT,
  payload: { data },
});
export const createProductSuccess = ({ data }) => ({
  type: CREATE_PRODUCT_SUCCESS,
  payload: { data },
});
export const createProductFailed = () => ({
  type: CREATE_PRODUCT_FAILED,
  payload: {},
});
