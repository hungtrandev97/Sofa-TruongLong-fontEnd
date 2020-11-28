export const CATEGORY_SUCCESS = "CATEGORY_SUCCESS";

// return
export const CategorySuccess = ({ data }) => ({
  type: CATEGORY_SUCCESS,
  payload: { data },
});
