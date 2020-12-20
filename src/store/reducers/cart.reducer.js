import { ADD_CART } from "../actions/actions";

const INIT_STATE = {
  cartData: [],
};

const cartReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ADD_CART: {
      const { data } = action.payload;
      return {
        ...state,
        cartData: data,
      };
    }
    default:
      return state;
  }
};
export default cartReducer;
