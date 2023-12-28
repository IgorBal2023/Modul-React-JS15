import "../css/smartCase.css";
import { colorsArray } from "./colors";
import { useChangeColorBtnSelector } from "../store/changeColorBtn/selectors";

export const SmartCase = () => {
  const colorActive = useChangeColorBtnSelector();

  return (
    <div className="container">
      <section className="smart_case">
        <h1 className="smart_case_title">It even preserves the battery.</h1>
        <p className="smart_case_text">
          When stored in the sleek and lightweight Smart Case , AirPods Max
          enter a low-power state to save energy.
        </p>
        <div className="smart_case_img">
          {colorsArray.map((color) => (
            <img
              key={color}
              className={`case-photo content-item ${
                color === colorActive ? "content-item-active" : ""
              }`}
              src={`src/assets/img/airpods-max-smartcase-${colorActive}.jpg`}
              alt="airpods-max"
            />
          ))}
        </div>
      </section>
    </div>
  );
};
