import React from "react";
import people from "../Images/people.jpeg";

const Feature = () => {
  return (
    <div className="feature">
      <button className="feature-spotlight">Feature Spotlight</button>
      <hr />
      <h1>SP TLIGHT</h1>
      <img src={people} alt="" />
      <div className="text">

      <h2>Get startups Featured in BigStartups Spotlight</h2>
      <p>
        Feature your founders, startups, and products through engaging videos
        and articles in our Spotlight Section, maximizing your exposure and
        credibility.
      </p>
      </div>
    </div>
  );
};

export default Feature;
