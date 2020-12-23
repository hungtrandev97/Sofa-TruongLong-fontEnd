import { ADD_CART, REMOVE_CART, MORE_QUATITY_CARY } from "../actions/actions";

const INIT_STATE = {
  cartData: [],
};

const cartReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ADD_CART: {
      const { data } = action.payload;
      return {
        ...state,
        cartData: state.cartData.map((content) =>
          content.idProduct === data[0].idProduct
            ? { ...content, quanity: content.quanity + 1 }
            : {
                ...content,
                cartData: state.cartData.push([data[0]]),
              }
        ),
      };
    }
    case REMOVE_CART: {
      const { data } = action.payload;
      return {
        ...state,
        cartData: state.cartData.filter((item) => item.idProduct !== data),
      };
    }
    default:
      return state;
  }
};
export default cartReducer;
