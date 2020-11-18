export const CREATE_CATEGORY = "CREATE_CATEGORY";
export const CREATE_CATEGORY_SUCCESS = "CREATE_CATEGORY_SUCCESS";
export const CREATE_CATEGORY_FAILED = "CREATE_CATEGORY_FAILED";
export const GET_ALL_CATEGORY = "GET_ALL_CATEGORY";
export const GET_ALL_CATEGORY_SUCCESS = "CREATE_CATEGORY_SUCCESS";
export const GET_ALL_CATEGORY_FAILED = "CREATE_CATEGORY_FAILED";

export const getAllCategory = () => ({
  type: GET_ALL_CATEGORY,
  payload: {},
});

export const getAllCategorySuccess = ({ data }) => ({
  type: GET_ALL_CATEGORY_SUCCESS,
  payload: { data },
});

export const getAllCategoryFailed = () => ({
  type: GET_ALL_CATEGORY_FAILED,
  payload: {},
});

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
