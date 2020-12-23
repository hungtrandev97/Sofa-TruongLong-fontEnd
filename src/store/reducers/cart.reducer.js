import { ADD_CART, REMOVE_CART, MORE_QUATITY_CARY } from "../actions/actions";

const INIT_STATE = {
  cartData: [],
};

const cartReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ADD_CART: {
      const { data } = action.payload;
      console.log(data, "add");
      return {
        ...state,
        cartData: data,
      };
    }
    case REMOVE_CART: {
      const { data } = action.payload;
      return {
        ...state,
        cartData: state.cartData.filter((item) => item.idProduct !== data),
      };
    }
    case MORE_QUATITY_CARY: {
      const { data } = action.payload;
      console.log(data, "update");
      return {
        ...state,
        cartData: state.cartData.map((content) =>
          content.idProduct === data[0]
            ? { ...content, quanity: data[1] }
            : content
        ),
      };
    }
    default:
      return state;
  }
};
export default cartReducer;
