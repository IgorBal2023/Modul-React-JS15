import { useEffect, useState } from "react";
import "../css/header.css";
import { Nav } from "./nav";

export const Header = () => {
  const [contentItem, setContentItem] = useState(null);
  // useEffect(() => {
  //   const contentItems = document.querySelectorAll(`.content-item-active`);

  //   setContentItem(contentItems);

  //   console.log(contentItems);
  // }, []);

  console.log(contentItem);
  return (
    <div className="header">
      <div className="container">
        <Nav />
        <div className="header-image">
          <img
            className="content-item color-red content-item-active"
            src="src\assets\img\airpods-max-select-side-red.png"
            alt="airpods-max"
          />
          <img
            className="content-item color-blue"
            src="src\assets\img\airpods-max-select-side-blue.png"
            alt="airpods-max"
          />
          <img
            className="content-item color-green "
            src="src\assets\img\airpods-max-select-side-green.png"
            alt="airpods-max"
          />
          <img
            className="content-item color-silver "
            src="src\assets\img\airpods-max-select-side-silver.png"
            alt="airpods-max"
          />
          <img
            className="content-item color-black "
            src="src\assets\img\airpods-max-select-side-black.png"
            alt="airpods-max"
          />
        </div>
      </div>
    </div>
  );
};
