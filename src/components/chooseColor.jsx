import { useState, useEffect, useRef } from "react";
import "../css/main.css";

export const ChooseColor = ({ contentItem }) => {
  const colorBtnRef = useRef(null);
  const [activeButton, setActiveButton] = useState("color-red");

  // useEffect(() => {
  //   const colorButtons = colorBtnRef.current.querySelectorAll(
  //     ".img_choose_color_btn"
  //   );
  //   console.log(colorButtons);

  //   colorButtons.forEach((button) => {
  //     button.addEventListener("click", handleButtonClick);

  //     return () => {
  //       button.removeEventListener("click", handleButtonClick);
  //     };
  //   });

  //   return () => {
  //     colorButtons.forEach((button) => {
  //       button.removeEventListener("click", handleButtonClick);
  //     });
  //   };
  // }, []);

  const handleButtonClick = (event) => {
    const clickedButton = event.currentTarget;
    const buttonColor = clickedButton.getAttribute("data-button");
    const contentActive = document.querySelectorAll(`.${buttonColor}`);

    console.log(contentItem);
    // contentItem.forEach((item)=>{
    //   item.classList.removeEventListener(`content-item-active`)
    // })
    contentActive.forEach((item) => {
      item.classList.add(`content-item-active`);
    });

    setActiveButton(buttonColor);
    console.log(`buttonColor: ${buttonColor}`);
    console.log(contentActive);
  };

  console.log(`activeButton: ${activeButton}`);

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
      <div className="img_choose_color" ref={colorBtnRef}>
        <button
          className={`img_choose_color_btn ${
            activeButton === "color-red" ? "img_choose_color_btn_activ" : ""
          }`}
          data-button="color-red"
        >
          <img
            src="src\assets\img\airpods-max-select-red.png"
            alt="airpods-max"
          />
        </button>
        <button
          className={`img_choose_color_btn ${
            activeButton === "color-blue" ? "img_choose_color_btn_activ" : ""
          }`}
          data-button="color-blue"
        >
          <img
            src="src\assets\img\airpods-max-select-blue.png"
            alt="airpods-max"
          />
        </button>
        <button
          className={`img_choose_color_btn ${
            activeButton === "color-green" ? "img_choose_color_btn_activ" : ""
          }`}
          data-button="color-green"
        >
          <img
            src="src\assets\img\airpods-max-select-green.png"
            alt="airpods-max"
          />
        </button>
        <button
          className={`img_choose_color_btn ${
            activeButton === "color-silver" ? "img_choose_color_btn_activ" : ""
          }`}
          data-button="color-silver"
        >
          <img
            src="src\assets\img\airpods-max-select-silver.png"
            alt="airpods-max"
          />
        </button>
        <button
          className={`img_choose_color_btn ${
            activeButton === "color-black" ? "img_choose_color_btn_activ" : ""
          }`}
          data-button="color-black"
        >
          <img
            src="src\assets\img\airpods-max-select-black.png"
            alt="airpods-max"
          />
        </button>
      </div>
    </section>
  );
};
