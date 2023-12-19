import "../css/main.css";

export const ChooseColor = () => {
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
        <button className="img_choose_color_btn img_choose_color_btn_activ" data-button="color-red">
          <img
            src="src\assets\img\airpods-max-select-red.png"
            alt="airpods-max"
          />
        </button>
        <button className="img_choose_color_btn " data-button="color-blue">
          <img
            src="src\assets\img\airpods-max-select-blue.png"
            alt="airpods-max"
          />
        </button>
        <button className="img_choose_color_btn " data-button="color-green">
          <img
            src="src\assets\img\airpods-max-select-green.png"
            alt="airpods-max"
          />
        </button>
        <button className="img_choose_color_btn " data-button="color-silver">
          <img
            src="src\assets\img\airpods-max-select-silver.png"
            alt="airpods-max"
          />
        </button>
        <button className="img_choose_color_btn " data-button="color-black">
         <img
          src="src\assets\img\airpods-max-select-black.png"
          alt="airpods-max"
        /> </button> 
      </div>
    </section>
  );
};
