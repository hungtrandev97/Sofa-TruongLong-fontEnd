import {
  CREATE_CATEGORY,
  CREATE_CATEGORY_SUCCESS,
  CREATE_CATEGORY_FAILED,
  GET_ALL_CATEGORY,
  GET_ALL_CATEGORY_SUCCESS,
  GET_ALL_CATEGORY_FAILED,
} from "../actions/actions";

const INIT_STATE = {
  dataCategory: [],
  CategoryLoading: false,
  errorCreateCategory: false,
};

const categoryReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case CREATE_CATEGORY:
      return {
        ...state,
        CategoryLoading: true,
        errorCreateCategory: false,
      };
    case CREATE_CATEGORY_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        dataCategory: data,
        CategoryLoading: false,
        errorCreateCategory: false,
      };
    }
    case CREATE_CATEGORY_FAILED: {
      return {
        ...state,
        CategoryLoading: false,
        errorCreateCategory: true,
      };
    }
    case GET_ALL_CATEGORY: {
      return {
        ...state,
        CategoryLoading: true,
        errorCreateCategory: false,
      };
    }
    case GET_ALL_CATEGORY_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        dataCategory: data,
        errorCreateCategory: false,
        CategoryLoading: false,
      };
    }
    case GET_ALL_CATEGORY_FAILED: {
      return {
        ...state,
        CategoryLoading: false,
        errorCreateCategory: true,
      };
    }
    default:
      return state;
  }
};
export default categoryReducer;
