export const CREATE_PRODUCT = "CREATE_PRODUCT";
export const CREATE_PRODUCT_SUCCESS = "CREATE_PRODUCT_SUCCESS";
export const CREATE_PRODUCT_FAILED = "CREATE_PRODUCT_FAILED";

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
