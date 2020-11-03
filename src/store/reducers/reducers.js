import { combineReducers } from "redux";

import authReducer from "./auth.reducer";
import { LOGOUT_USER } from "../actions/auth.actions";

const combinedReducer = combineReducers({
  authRedux: authReducer,
});

const rootReducer = (state, action) => {
  // todo test it
  const reassignState = state;
  if (action.type === LOGOUT_USER) {
    // clear everything but keep the stuff we want to be preserved ..
    delete reassignState.authRedux;
    delete reassignState.pdfRedux;
    delete reassignState.consumersRedux;
    delete reassignState.hcpRedux;
    delete reassignState.membersRedux;
    delete reassignState.profilesRedux;
    delete reassignState.authToggleRedux;
  }

  return combinedReducer(reassignState, action);
};

export default rootReducer;
