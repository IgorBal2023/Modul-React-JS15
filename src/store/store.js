import { combineReducers, compose, createStore } from "redux";
import { changeActiveColorReducer } from "./changeColorBtn/reducer";

const rootReducer = combineReducers({
  changeColor: changeActiveColorReducer,
});

export const store = createStore(
  rootReducer,
  {},
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
