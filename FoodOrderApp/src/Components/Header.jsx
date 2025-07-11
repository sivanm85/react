import { Link } from "react-router-dom";
import UseOnlineStatus from "./UseOnlineStatus";

const Header = () => {
  const onlineStatus = UseOnlineStatus();

  return (
    <div className="flex justify-between pink-bg shadow-lg mb-4">
      <div className="logo-container">
        <img
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_72,h_72/portal/m/logo_192x192.png"
          alt="Food Order Logo"
          className="w-15 m-5"
        />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/menu">Menu</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="contact">Contact</Link>
          </li>
          <li className="px-4">
            <Link to="/Grocery">Grocery</Link>
          </li>
          <li className="px-4">
            online status: {onlineStatus ? "Green" : "Red"}
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
