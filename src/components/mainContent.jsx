import "../css/main.css";
import { colorsArray } from "./colors";
import { useChangeColorBtnSelector } from "../store/changeColorBtn/selectors";

export const MainContent = () => {
  const colorActive = useChangeColorBtnSelector();

  return (
    <section className="main_content">
      <h1 className="main_content_title">An extremely original composition.</h1>
      <p className="main_content_text">
        Introducing the reinvention of over-the-ear headphones. From the cushion
        to the headband, the AirPods Max are designed with acoustic insulation
        in mind, adapted to many head shapes, so you can immerse yourself in the
        purity of sound.
      </p>
      <div className="side_text_foto">
        <div className="side_text">
          <p>
            The headband is made of breathable mesh, distributing the weight to
            reduce pressure on the head.
          </p>
          <p>
            The stainless steel structure is wrapped in a soft-touch material to
            provide a remarkable harmony between resistance, flexibility and
            comfort.
          </p>
          <p>
            The telescoping arms expand and stay in any position you want,
            allowing you to maintain fit and isolation.
          </p>
        </div>
        <div className="side_foto">
          {colorsArray.map((color) => (
            <img
              key={color}
              className={`content-item ${
                color === colorActive ? "content-item-active" : ""
              } `}
              src={`src/assets/img/design_colors_${colorActive}_side.jpg`}
              alt="airpods-max"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
