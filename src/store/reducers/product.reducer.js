import { PRODUCT_SCREENING, UPDATE_ID_PRODUCT } from "../actions/actions";

const INIT_STATE = {
  numberPrice: 15000000,
  idCategory: "",
};

const productReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case PRODUCT_SCREENING:
      return {
        ...state,
        numberPrice: action.payload,
      };
    case UPDATE_ID_PRODUCT:
      return {
        ...state,
        idCategory: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
