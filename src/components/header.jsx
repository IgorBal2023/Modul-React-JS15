import "../css/header.css";
import { Nav } from "./nav";
import { useChangeColorBtnSelector } from "../store/changeColorBtn/selectors";
import { colorsArray } from "./colors";

export const Header = () => {
  const colorActive = useChangeColorBtnSelector();

  console.log("colorActive", colorActive);
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
                src={`src/assets/img/airpods-max-select-side-${colorActive}.png`}
                alt="airpods-max"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
