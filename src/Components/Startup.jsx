import React from "react";
import freelancing from "../Images/post freelancing projects.png";
import jobinternship from "../Images/post job and internship.png";

const Startup = () => {
  return (
    <div className="startup">
      <h1>For Startups</h1>
      <div className="cards">
        <div className="card">
          <img src={freelancing} alt="Post Projects" className="card-image" />
          <button className="card-button">Post Projects</button>
          <h2>Post Freelancing Projects</h2>
          <p>
            We provide flexible hiring options to suit your business
            requirements.
          </p>
        </div>
        <div className="card">
          <img
            src={jobinternship}
            alt="Post Jobs & Internships"
            className="card-image"
          />
          <button className="card-button">Post Jobs & Internships</button>
          <h2>Post Jobs & Internships</h2>
          <p>
            With Bigstartups Network, there are no regional barriers. Expand
            your horizons and connect with talent beyond borders.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Startup;
