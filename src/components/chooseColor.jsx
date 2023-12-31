import "../css/main.css";
import imgRed from "../assets/img/airpods-max-select-red.png";
import imgBlue from "../assets/img/airpods-max-select-blue.png";
import imgGreen from "../assets/img/airpods-max-select-green.png";
import imgSilver from "../assets/img/airpods-max-select-silver.png";
import imgBlack from "../assets/img/airpods-max-select-black.png";
import { useDispatch } from "react-redux";
import { useChangeColorBtnSelector } from "../store/changeColorBtn/selectors";
import { setActiveColor } from "../store/changeColorBtn/actions";

export const ChooseColor = () => {
  const dispatch = useDispatch();
  const activeButton = useChangeColorBtnSelector();
  const handleBtnClick = (color) => {
    dispatch(setActiveColor(color));
  };

  return (
    <section className="choose_color">
      <div className="text_choose_color">
        <h1 className="choose_h1">Choose your colour</h1>
        <div className="text_choose_content_all">
          <p>
            The perfect balance between the purityof hi‑fi and the magic of
            AirPods <br />
            The ultimate personal audio experience.
          </p>
        </div>
      </div>
      <div className="img_choose_color">
        <button
          className={`img_choose_color_btn ${
            activeButton === "red" ? "img_choose_color_btn_activ" : ""
          }`}
          onClick={() => handleBtnClick("red")}
        >
          <img src={imgRed} alt="airpods-max" />
        </button>
        <button
          className={`img_choose_color_btn ${
            activeButton === "blue" ? "img_choose_color_btn_activ" : ""
          }`}
          onClick={() => handleBtnClick("blue")}
        >
          <img src={imgBlue} alt="airpods-max" />
        </button>
        <button
          className={`img_choose_color_btn ${
            activeButton === "green" ? "img_choose_color_btn_activ" : ""
          }`}
          onClick={() => handleBtnClick("green")}
        >
          <img src={imgGreen} alt="airpods-max" />
        </button>
        <button
          className={`img_choose_color_btn ${
            activeButton === "silver" ? "img_choose_color_btn_activ" : ""
          }`}
          onClick={() => handleBtnClick("silver")}
        >
          <img src={imgSilver} alt="airpods-max" />
        </button>
        <button
          className={`img_choose_color_btn ${
            activeButton === "black" ? "img_choose_color_btn_activ" : ""
          }`}
          onClick={() => handleBtnClick("black")}
        >
          <img src={imgBlack} alt="airpods-max" />
        </button>
      </div>
    </section>
  );
};
