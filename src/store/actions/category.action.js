export const CREATE_CATEGORY = "CREATE_CATEGORY";
export const CREATE_CATEGORY_SUCCESS = "CREATE_CATEGORY_SUCCESS";
export const CREATE_CATEGORY_FAILED = "CREATE_CATEGORY_FAILED";

export const createCategory = ({ category_title }) => ({
  type: CREATE_CATEGORY,
  payload: { category_title },
});
export const createCategorySuccess = ({ data }) => ({
  type: CREATE_CATEGORY_SUCCESS,
  payload: { data },
});
export const createCategoryFailed = () => ({
  type: CREATE_CATEGORY_FAILED,
  payload: {},
});
