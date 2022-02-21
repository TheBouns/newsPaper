import { Link } from "react-router-dom";
import "./Home.css";
const Home = () => {
  const sports = ["Football","Rugby","Basketball","Tennis","F1","Dakar","Ski","Olimpics","NCAA","Nascar","Golf","Karate","Judo","Swimming","Fishing","Kart","Dards","Soccer","Criket","Lacross","Padel","Bowling","Ping-Pong","Racing","Pool",]
  const sport = sports.map((item,index)=>{
    const string ="";
    if(index%2==0){
      return <strong>{item}-</strong>
    }
    else{
      return <>{item}-</>
    }
  })
  return( 
  <div className="homeContainer">
    <div className="sports">{sport}</div>
    <div className="homeInfo">
      <h1 className="homeTitle">Welcome To Sports News Website</h1>
      <Link to="/news" className="linkToNews">News</Link>
      
    </div>
  </div>
  )
};

export default Home;
