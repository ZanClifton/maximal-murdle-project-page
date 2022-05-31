import "../styles/App.css";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <nav className="Nav-container">
      <Link to="/tech" className="Nav-item">
        Tech Stack
      </Link>
      <Link to="/maximal" className="Nav-item">
        Maximal()
      </Link>
    </nav>
  );
};
