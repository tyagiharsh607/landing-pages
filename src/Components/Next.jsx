import React from 'react'
import monitor from "../Images/monitor.png";
import communicate from "../Images/communicate.png";
import boost from "../Images/boost.png";

const Next = () => {
  return (
    <div className="next">
      <h2>What's Next?</h2>
      <div className="next-steps">
        <div className="step step1">
          <img src={monitor} alt="Monitor icon" />
          <div className="text">
            <h4>Monitor Applications</h4>
            <p>
              Log into your Bigstartups account to monitor applications and
              manage your job listings
            </p>
          </div>
        </div>
        <div className="step step2">
          <div className="text text2">
            <h4>Communicate with Candidates</h4>
            <p>
              Engage with potential candidates directly through the platform to
              find the perfect fit for your team
            </p>
          </div>
          <img src={communicate} alt="Communicate icon" />
        </div>
        <div className="step step3">
          <img src={boost} alt="Boost icon" />
          <div className="text">
            <h4>Boost Your Listing</h4>
            <p>
              Consider boosting your job listing to reach even more candidates
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Next
