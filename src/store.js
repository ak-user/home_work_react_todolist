import { createStore, applyMiddleware, compose } from "redux";
import ReduxThunk from "redux-thunk";

import reducer from "./ducks/index";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(ReduxThunk))
);

// console.log('increase', increase())
// store.dispatch(increase())
window.store = store;
export default store;
