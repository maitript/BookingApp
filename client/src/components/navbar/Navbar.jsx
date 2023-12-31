import "./navbar.css"
import {Link} from "react-router-dom"
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

const Navbar = () => {
  const {user} = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="navContainer">
      <Link to = "/" style = {{color:"inherit",textDecoration:"none"}}>
      <span className="logo">Holiday Booking</span>
      </Link>
        {user ? user.username : <div className="navItems">
          <Link to ="/login"><button className="navButton">Register</button></Link>
          <Link to ="/register"><button className="navButton">Login</button></Link>
        </div> }
      </div>
    </div>
  )
}

export default Navbar