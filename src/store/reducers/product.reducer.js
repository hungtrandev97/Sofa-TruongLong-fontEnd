import { PRODUCT_SCREENING } from "../actions/actions";

const INIT_STATE = {
  numberPrice: 15,
};

const productReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case PRODUCT_SCREENING:
      return {
        ...state,
        numberPrice: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
