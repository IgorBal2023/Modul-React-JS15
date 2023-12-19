import "../css/smartCase.css";

export const SmartCase = () => {
  return (
    <div className="container">
      <section className="smart_case">
        <h1 className="smart_case_title">It even preserves the battery.</h1>
        <p className="smart_case_text">
          When stored in the sleek and lightweight Smart Case , AirPods Max
          enter a low-power state to save energy.
        </p>
        <div className="smart_case_img">
          <img
            className="case-photo content-item content-item-active color-red"
            src="src\assets\img\airpods-max-smartcase-red.jpg"
            alt="airpods-max"
          />
          <img
            className="case-photo content-item color-blue"
            src="src\assets\img\airpods-max-smartcase-blue.jpg"
            alt="airpods-max"
          />
          <img
            className="case-photo content-item color-green"
            src="src\assets\img\airpods-max-smartcase-green.jpg"
            alt="airpods-max"
          />
          <img
            className="case-photo content-item color-silver"
            src="src\assets\img\airpods-max-smartcase-silver.jpg"
            alt="airpods-max"
          />
          <img
            className="case-photo content-item color-black"
            src="src\assets\img\airpods-max-smartcase-black.jpg"
            alt="airpods-max"
          />
        </div>
      </section>
    </div>
  );
};
