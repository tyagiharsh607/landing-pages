import React from "react";
import Header from "../Components/Header";
import JobDetails from "../Components/JobDetails";
import Next from "../Components/Next";

const Expertlp1 = () => {
  return (
    <div className="expertlp1">
      <Header heading="Job is Live" para="Your Job Posting is Live!" />

      <div className="greeting">
        <h2 className="name">Hi Shashank Rawat,</h2>
        <h2>Great News!</h2>
        <p>
          Your job listing is now visible to thousands of jobseekers and
          freelancers who are eager to join innovative startups like yours
        </p>
      </div>

      <JobDetails />
      <Next />

      <button className="manage-jobs">Manage Jobs</button>
      <div className="footer">
        <h2>Thank You for Choosing Bigstartups!</h2>
        <p>
          We appreciate your trust in Bigstartups to help you find the perfect
          candidates. We look forward to seeing your startup grow and thrive!
        </p>
      </div>
    </div>
  );
};

export default Expertlp1;
