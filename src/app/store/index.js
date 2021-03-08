import { createStore, combineReducers } from "redux";
import content from "../../content";
import signUp from "../../sing-up";
import auth from "../../auth";


const allReducers = combineReducers({
  [content.constants.NAME]: content.reducer,
  [signUp.constants.NAME]: signUp.reducer,
  [auth.constants.NAME]: auth.reducer,
});

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

);

export default store;
