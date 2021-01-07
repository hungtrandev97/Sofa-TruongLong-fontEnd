export const PRODUCT_SCREENING = "PRODUCT_SCREENING";
export const UPDATE_ID_PRODUCT = "UPDATE_ID_PRODUCT";

export const ProductScreening = (number) => ({
  type: PRODUCT_SCREENING,
  payload: number,
});

export const UpdateIdProduct = (data) => ({
  type: UPDATE_ID_PRODUCT,
  payload: data,
});
