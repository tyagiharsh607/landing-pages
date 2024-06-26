import React from "react";

import sLogo from "../Images/slogo.jpeg";

const JobDetails = () => {
  return (
    <div className="job-details">
      <div className="job">
        <div className="details">
          <img src={sLogo} alt="" />
          <div className="text">
            <h2>Tech Savvy Real Estate Agent</h2>
            <p>Sellstate Heartland Realty</p>
            <p>
              <svg
                width="14"
                height="18"
                viewBox="0 0 14 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 0C5.14416 0.00221173 3.36495 0.747945 2.05268 2.07362C0.740397 3.39929 0.00219684 5.19665 7.44728e-06 7.07143C-0.0022153 8.6035 0.493176 10.094 1.41019 11.3143C1.41019 11.3143 1.6011 11.5682 1.63228 11.6049L7 18L12.3703 11.6016C12.3983 11.5676 12.5898 11.3143 12.5898 11.3143L12.5904 11.3124C13.507 10.0926 14.0022 8.6028 14 7.07143C13.9978 5.19665 13.2596 3.39929 11.9473 2.07362C10.635 0.747945 8.85584 0.00221173 7 0ZM7 9.64286C6.49656 9.64286 6.00442 9.49205 5.58582 9.20949C5.16723 8.92694 4.84097 8.52534 4.64831 8.05547C4.45565 7.5856 4.40524 7.06858 4.50346 6.56977C4.60168 6.07096 4.84411 5.61277 5.20009 5.25315C5.55608 4.89353 6.00964 4.64863 6.50341 4.54941C6.99718 4.45019 7.50898 4.50111 7.9741 4.69574C8.43922 4.89036 8.83677 5.21995 9.11647 5.64282C9.39616 6.06569 9.54545 6.56285 9.54545 7.07143C9.54461 7.75315 9.27616 8.40671 8.79898 8.88876C8.32179 9.37082 7.67484 9.64201 7 9.64286Z"
                  fill="black"
                />
              </svg>{" "}
              Overland Park, USA (Hybrid)
            </p>
          </div>
        </div>
        <div>
          <button className="view-job">View Job</button>
        </div>
      </div>
      <div className="text2">
        <h1>Job Description</h1>
        <p>
          Candidate will serve as customer service executive resolving customer
          queries in line with the client and business guidelines. Individuals
          with experience in handling inbound calls from UK customers.
        </p>
      </div>
      <hr />
      <p className="final-details">
        <span>
          {" "}
          <strong>Date:</strong> 04/04/2023
        </span>
        <span>
          <strong>Job Type:</strong> <span className="job-type">On-site</span>
        </span>
        <span>
          <strong>Status:</strong> <span className="status">Approved</span>
        </span>
      </p>
    </div>
  );
};

export default JobDetails;
