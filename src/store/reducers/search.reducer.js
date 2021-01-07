import { SEARCH_SUCCESS } from "../actions/actions";

const INIT_STATE = {
  dataSearch: "",
};

const searchReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case SEARCH_SUCCESS: {
      const { value } = action.payload;
      return {
        ...state,
        dataSearch: value,
      };
    }
    default:
      return state;
  }
};
export default searchReducer;
