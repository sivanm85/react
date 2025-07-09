import { Link } from "react-router-dom";
import UseOnlineStatus from "./UseOnlineStatus";

const Header = () => {
  const onlineStatus = UseOnlineStatus();

  return (
    <div className="header">
      <div className="logo-container">
        <img
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_72,h_72/portal/m/logo_192x192.png"
          alt="Food Order Logo"
          className="logo"
        />
      </div>
      <div className="nav-container">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/menu">Menu</Link>
          </li>
          <li className="nav-item">
            <Link to="/about">About Us</Link>
          </li>
          <li className="nav-item">
            <Link to="contact">Contact</Link>
          </li>
          <li className="nav-item">
            <Link to="/Grocery">Grocery</Link>
          </li>
          <li className="nav-item">
            online status: {onlineStatus ? "Green" : "Red"}
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
