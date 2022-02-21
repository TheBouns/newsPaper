import { Link } from "react-router-dom";
import "./Home.css";
const Home = () => {
  return (
    <div className="homeContainer">
      <div className="homeInfo">
        <h1 className="homeTitle">Welcome To SportsNews Website</h1>

        <Link to="/news" className="linkToNews">
          News
        </Link>
      </div>
    </div>
  );
};

export default Home;
