import React from "react";
import profileImage from "../Images/profile picture.png";
import v1 from "../Images/vector1.png";
import v2 from "../Images/vector2.png";
import v3 from "../Images/Vector3.png";

const ProfileCard = () => {
  return (
    <div className="profile-card">
      <div className="profile-header">
        <div className="profile-img-info">
          <div className="profile-image-container">
            <img
              src={profileImage}
              alt="Ridhima Sen"
              className="profile-image"
            />
          </div>
          <div className="profile-info">
            <h2 className="profile-name">Ridhima Sen</h2>
            <p className="profile-title">Consulting Leader</p>
            <ul className="profile-details">
              <li>
                <img src={v1} alt="v1" />
                <span>Qualified in startup Consulting</span>
              </li>
              <li>
                <img src={v2} alt="v2" />
                <span>20 Years of experience in consulting</span>
              </li>
              <li>
                <img src={v3} alt="v3" />
                <span>Consultation fee ₹1000</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="consultation-prices">
          <h2>Consultation Prices</h2>
          <ul>
            <li>
              <span className="price-icon">🕒30 min session </span>
              <span className="price">₹1000</span>
            </li>
            <li>
              <span className="price-icon">🕐 01 hr session </span>
              <span className="price">₹1500</span>
            </li>
            <li>
              <span className="price-icon">📅 Availability </span>
              <span className="availability">Mon-Sat</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="skills-section">
        <h2>Skills</h2>
        <div className="skills-list">
          <span className="skill-tag">Marketing Consulting</span>
          <span className="skill-tag">Accounts Consulting</span>
          <span className="skill-tag">Buisness Consulting</span>
          <span className="skill-tag">Buisness Consulting</span>
          <span className="skill-tag">Buisness Consulting</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
