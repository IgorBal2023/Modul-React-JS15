import "../css/main.css";

export const MainContent = () => {
  return (
    <section className="main_content">
      <h1 className="main_content_title">An extremely original composition.</h1>
      <p className="main_content_text">
          Introducing the reinvention of over-the-ear headphones. From the
          cushion to the headband, the AirPods Max are designed with acoustic
          insulation in mind, adapted to many head shapes, so you can immerse
          yourself in the purity of sound.
        </p>
        <div className="side_text_foto">
            <div className="side_text">
                <p>The headband is made of breathable mesh, distributing the weight to reduce pressure on the head.</p>
                <p>The stainless steel structure is wrapped in a soft-touch material to provide a remarkable harmony between resistance, flexibility and comfort.</p>
                <p>The telescoping arms expand and stay in any position you want, allowing you to maintain fit and isolation.</p>
            </div>
            <div className="side_foto">
                <img className="content-item color-red content-item-active" src="src\assets\img\design_colors_red_side.jpg" alt="airpods-max" />
                <img className="content-item color-blue" src="src\assets\img\design_colors_blue_side.jpg" alt="airpods-max" />
                <img className="content-item color-green" src="src\assets\img\design_colors_green.jpg" alt="airpods-max" />
                <img className="content-item color-silver" src="src\assets\img\design_colors_silver_side.jpg" alt="airpods-max" />
                <img className="content-item color-black" src="src\assets\img\design_colors_black.jpg" alt="airpods-max" />

            </div>
        </div>
    </section>
  );
};
