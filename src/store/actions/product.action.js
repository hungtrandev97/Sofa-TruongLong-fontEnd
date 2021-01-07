export const PRODUCT_SCREENING = "PRODUCT_SCREENING";
export const UPDATE_ID_PRODUCT = "UPDATE_ID_PRODUCT";
export const UPDATE_VALUE_PRODUCT = "UPDATE_VALUE_PRODUCT";

export const ProductScreening = (number) => ({
  type: PRODUCT_SCREENING,
  payload: number,
});

export const UpdateIdProduct = (data) => ({
  type: UPDATE_ID_PRODUCT,
  payload: data,
});

export const updateValueProduct = (data) => ({
  type: UPDATE_VALUE_PRODUCT,
  payload: data,
});
