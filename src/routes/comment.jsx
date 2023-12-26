import "../css/comment.css";
import { Link } from "react-router-dom/cjs/react-router-dom";

export const Comment = () => {
  return (
    <div className="comment">
      <Link to="/">
        <button className="buttonHome">Home</button>
      </Link>
      <p>Comment</p>
    </div>
  );
};
