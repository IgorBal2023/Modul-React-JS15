import "../css/footer.css";
import imgIconFooter from "../assets/img/apple_white.svg";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="phone">
          <p>Find a retailer near you</p>
          <p id="contact">Or call 800 207 758</p>
          <img src={imgIconFooter} alt="apple" />
        </div>
        <div className="copyright">
          <p className="copyright_p">Copyright © 2023 Apple Inc. </p>
          <p className="copyright_p">All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};
