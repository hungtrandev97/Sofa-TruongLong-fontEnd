import {
  PRODUCT_SCREENING,
  UPDATE_ID_PRODUCT,
  UPDATE_VALUE_PRODUCT,
} from "../actions/actions";

const INIT_STATE = {
  numberPrice: 15000000,
  idCategory: "",
  nameCategory: "",
  idProduct: "",
  idCategoryForProduct: "",
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
        idCategory: action.payload.id,
        nameCategory: action.payload.category_title,
      };
    case UPDATE_VALUE_PRODUCT:
      return {
        ...state,
        idProduct: action.payload.idProduct,
        idCategoryForProduct: action.payload.idCategory,
      };
    default:
      return state;
  }
};

export default productReducer;
