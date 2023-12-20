import "../css/nav.css";
import { NavLink } from "react-router-dom/cjs/react-router-dom";

export const Nav = () => {
  return (
    <div className="navDiv">
      <div className="label">
        <img src="src\assets\img\Vector.svg" />
      </div>
      <nav className="nav">
        <ul className="ul_menu">
          <li>Info</li>
          <li>Contact</li>
          <NavLink to="/comment">
            <li>Comment</li>
          </NavLink>
          <NavLink to="/cart">
            <button className="buy">BUY</button>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};
