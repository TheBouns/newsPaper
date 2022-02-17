import { Link } from "react-router-dom";
import { FaNewspaper } from "react-icons/fa";

import "./Header.css";

const Header = () => {
  return (
    <nav>
      <div className="logo">
        <FaNewspaper />
        SportsNews
      </div>
      <div className="links">
        <p>
          <Link to="/">Home</Link>
        </p>
        <p>
          <Link to="/form">Contact</Link>
        </p>
        <p>
          <Link to="/news">News</Link>
        </p>
      </div>
    </nav>
  );
};

export default Header;
