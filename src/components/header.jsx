import "../css/header.css";
import airpodsMaxSelectSideRed from "../assets/img/airpods-max-select-side-red.png";
import airpodsMaxSelectSideBlue from "../assets/img/airpods-max-select-side-blue.png";
import airpodsMaxSelectSideGreen from "../assets/img/airpods-max-select-side-green.png";
import airpodsMaxSelectSideSilver from "../assets/img/airpods-max-select-side-silver.png";
import airpodsMaxSelectSideBlack from "../assets/img/airpods-max-select-side-black.png";
import { Nav } from "./nav";
import { useChangeColorBtnSelector } from "../store/changeColorBtn/selectors";
import { colorsArray } from "./colors";

export const Header = () => {
  const colorActive = useChangeColorBtnSelector();

  const activImgHeader = (colorActive) => {
    switch (colorActive) {
      case "red":
        return airpodsMaxSelectSideRed;
      case "blue":
        return airpodsMaxSelectSideBlue;
      case "green":
        return airpodsMaxSelectSideGreen;
      case "silver":
        return airpodsMaxSelectSideSilver;
      case "black":
        return airpodsMaxSelectSideBlack;
      default:
        return airpodsMaxSelectSideRed;
    }
  };

  return (
    <div className="header">
      <div className="container">
        <Nav />
        <h1 className="title">AirPods Max</h1>
        <div className="header-image">
          <div className="box-image">
            {colorsArray.map((color) => (
              <img
                key={color}
                className={`content-item ${
                  color === colorActive ? "content-item-active" : ""
                } color-${colorActive}`}
                src={activImgHeader(colorActive)}
                alt={`airpods-max-${colorActive}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
