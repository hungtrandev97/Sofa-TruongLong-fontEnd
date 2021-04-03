import {
  ADD_CART,
  REMOVE_CART,
  MORE_QUATITY_CARY,
  UPDATE_INFOR,
  REMOVE_DATE_CART,
  LOGOUT_USER_SUCCESS,
} from "../actions/actions";

const INIT_STATE = {
  cartData: [],
  inforConsumer: [],
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
    case REMOVE_CART: {
      const { data } = action.payload;
      return {
        ...state,
        cartData: state.cartData.filter((item) => item.idProduct !== data),
      };
    }
    case MORE_QUATITY_CARY: {
      const { data } = action.payload;
      return {
        ...state,
        cartData: state.cartData.map((content) =>
          content.idProduct === data[0]
            ? { ...content, quanity: data[1] }
            : content
        ),
      };
    }
    case UPDATE_INFOR: {
      const { data } = action.payload;
      return {
        ...state,
        inforConsumer: data,
      };
    }
    case REMOVE_DATE_CART: {
      return {
        ...state,
        cartData: [],
      };
    }
    case LOGOUT_USER_SUCCESS: {
      return {
        ...state,
        inforConsumer: [],
      };
    }
    default:
      return state;
  }
};
export default cartReducer;
