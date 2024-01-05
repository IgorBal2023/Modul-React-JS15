import "../css/nav.css";
import img from "../assets/img/Vector.svg";
import { NavLink } from "react-router-dom/cjs/react-router-dom";

export const Nav = () => {
  return (
    <div className="navDiv">
      <div className="label">
        <NavLink to="#">
          <img className="labelApple" src={img} alt="apple" />
        </NavLink>
      </div>
      <nav className="nav">
        <ul className="ul_menu">
          <li>
            <a href="#contact">Contact</a>
          </li>
          <NavLink to="/techSpecs">
            <li>Tech Specs</li>
          </NavLink>
          <NavLink to="/cart">
            <button className="buy">BUY</button>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};
