import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="deals">
        <div className="logo">
          <div className="logo-circle"></div>
        </div>
        <div className="search-container">
          <input type="text" className="search-bar" />
          <i className="fas fa-search search-icon"></i>
        </div>
        <div className="offers-deals">Offers & Deals</div>
        <div className="icons">
          <div className="icon">
            <i className="fa fa-bell"></i>
            <span className="badge">10</span>
          </div>
          <div className="icon">
            <i class="fa-solid fa-message"></i>
            <span className="badge">15</span>
          </div>
          <div className="icon">
            <i className="fa fa-globe"></i>
            <span className="badge">89</span>
          </div>
        </div>
        <div className="profile-picture"></div>
      </div>
      <div className="nav-links">
        <a className="nav-link">LaunchPad</a>
        <a className="nav-link">Learning</a>
        <a className="nav-link">Networking</a>
        <a className="nav-link">Projects</a>
        <a className="nav-link">Jobs</a>
      </div>
    </div>
  );
};

export default Navbar;
