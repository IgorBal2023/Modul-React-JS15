import "../css/smartCase.css";
import airpodsMaxSmartcaseRed from "../assets/img/airpods-max-smartcase-red.jpg";
import airpodsMaxSmartcaseBlue from "../assets/img/airpods-max-smartcase-blue.jpg";
import airpodsMaxSmartcaseGreen from "../assets/img/airpods-max-smartcase-green.jpg";
import airpodsMaxSmartcaseSilver from "../assets/img/airpods-max-smartcase-silver.jpg";
import airpodsMaxSmartcaseBlack from "../assets/img/airpods-max-smartcase-black.jpg";
import { colorsArray } from "./colors";
import { useChangeColorBtnSelector } from "../store/changeColorBtn/selectors";

export const SmartCase = () => {
  const colorActive = useChangeColorBtnSelector();

  const activImgSmartCase = (colorActive) => {
    switch (colorActive) {
      case "red":
        return airpodsMaxSmartcaseRed;
      case "blue":
        return airpodsMaxSmartcaseBlue;
      case "green":
        return airpodsMaxSmartcaseGreen;
      case "silver":
        return airpodsMaxSmartcaseSilver;
      case "black":
        return airpodsMaxSmartcaseBlack;
      default:
        return airpodsMaxSmartcaseRed;
    }
  };

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
              src={activImgSmartCase(colorActive)}
              alt={`airpods-max-${colorActive}`}
            />
          ))}
        </div>
      </section>
    </div>
  );
};
