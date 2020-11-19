import {
  CREATE_PRODUCT,
  CREATE_PRODUCT_SUCCESS,
  CREATE_PRODUCT_FAILED,
  GET_ALL_PRODUCT,
  GET_ALL_PRODUCT_SUCCESS,
  GET_ALL_PRODUCT_FAILED,
} from "../actions/actions";

const INIT_STATE = {
  dataProduct: [],
  ProductLoading: false,
  errorProduct: false,
};

const productReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case CREATE_PRODUCT:
      return {
        ...state,
        ProductLoading: true,
        errorProduct: false,
      };
    case CREATE_PRODUCT_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        dataProduct: data,
      };
    }
    case CREATE_PRODUCT_FAILED: {
      return {
        ...state,
        ProductLoading: false,
        errorProduct: true,
      };
    }
    case GET_ALL_PRODUCT: {
      return {
        ...state,
        ProductLoading: true,
        errorProduct: false,
      };
    }
    case GET_ALL_PRODUCT_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        dataProduct: data,
        ProductLoading: false,
        errorProduct: false,
      };
    }
    case GET_ALL_PRODUCT_FAILED: {
      return {
        ...state,
        ProductLoading: false,
        errorProduct: true,
      };
    }
    default:
      return state;
  }
};
export default productReducer;
