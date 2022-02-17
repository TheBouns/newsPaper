import { Link } from "react-router-dom"
import './Header.css'

 const Header = ()=>{
    return(
        <nav>
            <p><Link to="/">Home</Link></p>
            <p><Link to="/form">Contact</Link></p>
            <p><Link to ="/news">News</Link></p>
        </nav>
    );
}

export default Header;