import "../css/nav.css";
import { NavLink } from "react-router-dom/cjs/react-router-dom";

export const Nav = () => {
  return (
    <div className="navDiv">
      <div className="label">
        <NavLink to = "#">
        <img className="labelApple" src="src\assets\img\Vector.svg" alt="apple" /></NavLink>
      </div>
      <nav className="nav">
        <ul className="ul_menu">
          <li>
            <a href="#contact">Contact</a>
          </li>
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
