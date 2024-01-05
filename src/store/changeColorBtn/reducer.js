import { SET_ACTIVE_COLOR } from "./actions";

export const changeActiveColorReducer = (state = "red", action) => {
  switch (action.type) {
    case SET_ACTIVE_COLOR:
      return action.payload;
    default:
      return state;
  }
};
