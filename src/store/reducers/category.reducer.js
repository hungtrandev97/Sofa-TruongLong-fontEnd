import { CATEGORY_SUCCESS } from "../actions/actions";

const INIT_STATE = {
  dataCategory: [],
};

const categoryReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case CATEGORY_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        dataCategory: data,
      };
    }
    default:
      return state;
  }
};
export default categoryReducer;
