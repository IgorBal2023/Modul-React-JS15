import { useSelector } from "react-redux";

export const useChangeColorBtnSelector = () => {
  return useSelector((state) => {
    return state.changeColor;
  });
};
