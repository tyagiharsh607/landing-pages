import React from 'react'
import startup from "../Images/startup.png"


const WorkWithStartups = () => {
  return (
    <>
    <div className="landing-page">
      <div className="content">
        <h1>WORK WITH STARTUPS</h1>
        <p>
          We're dedicated to bridging the gap between aspiring students and
          innovative startups, creating opportunities that know no boundaries.
        </p>
        <button className="cta-button">Button</button>
      </div>
      <div className="image-container">
        <img src={startup} alt="Rocket Launch" />
      </div>
    </div>
      <h1>Access to wide pool of student talent across the globe</h1>
    </>
  );
}

export default WorkWithStartups
