const Header = () => {
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
            <a href="#home">Home</a>
          </li>
          <li className="nav-item">
            <a href="#menu">Menu</a>
          </li>
          <li className="nav-item">
            <a href="#about">About Us</a>
          </li>
          <li className="nav-item">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
