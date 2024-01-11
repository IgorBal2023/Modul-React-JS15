export const SET_ACTIVE_COLOR = "SET_ACTIVE_COLOR";

export const setActiveColor = (color) => {
  return {
    type: SET_ACTIVE_COLOR,
    payload: color,
  };
};
