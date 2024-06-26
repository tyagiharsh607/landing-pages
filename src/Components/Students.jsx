import React from "react";
import StudentsCard from "./StudentsCard";
import job from "../Images/Job.png";
import internship from "../Images/Internship.png";
import freelancing from "../Images/Freelancing.png";

const Students = () => {
  return (
    <div className="students">
      <h1>For Students</h1>
      <div className="cards">
        <StudentsCard
          className="card1"
          imageSrc={job}
          heading="Browse Jobs "
          para=" Discover a wide range of projects and job opportunities offered by startups,
           companies, and organizations across various industries and domains.
        "
        />
        <StudentsCard
          imageSrc={internship}
          heading="Browse Internship "
          para=" Discover Freelancing opportunities offered by startups, SMEs, corporations, and other organizations seeking to recruit talented and ambitious individuals."
        />
        <StudentsCard
          imageSrc={freelancing}
          heading="Freelancing Projects"
          para="Discover internship opportunities offered by startups, SMEs, corporations, and other organizations seeking to recruit talented and ambitious individuals. "
        />
      </div>
    </div>
  );
};

export default Students;
