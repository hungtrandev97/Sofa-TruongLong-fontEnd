import { combineReducers } from "redux";
import settingsReducer from "./settings.reducer";
import authReducer from "./auth.reducer";
import categoryReducer from "./category.reducer";
import cartReducer from "./cart.reducer";
import productReducer from "./product.reducer";
import searchReducer from "./search.reducer";
import { LOGOUT_USER } from "../actions/auth.actions";

const combinedReducer = combineReducers({
  settings: settingsReducer,
  authRedux: authReducer,
  categoryRedux: categoryReducer,
  cartRedux: cartReducer,
  productRedux: productReducer,
  searchRedux: searchReducer,
});

const rootReducer = (state, action) => {
  // todo test it
  const reassignState = state;
  if (action.type === LOGOUT_USER) {
    delete reassignState.authRedux;
  }

  return combinedReducer(reassignState, action);
};

export default rootReducer;
