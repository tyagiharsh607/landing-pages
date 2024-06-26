import React from "react";
import BenefitCard from "./BenefitCard";
import career from "../Images/advancement.png";
import portfolio from "../Images/portfolio building.png";
import technology from "../Images/technologies cuttiing edge.png";
import network from "../Images/networking opportunities.png";

const AdditionalBenefits = () => {
  return (
    <div className="additional-benefits">
      <h1>Additional Benefits</h1>
      <div className="cards">
        <BenefitCard
          className="card"
          imageSrc={career}
          heading="Career Advancement"
          para=" Position yourself for career advancement by gaining practical experience, expanding your professional network, and building a solid reputation within the startup community"
        />
        <BenefitCard
          className="card"
          imageSrc={portfolio}
          heading="Portfolio Building"
          para="Build a strong portfolio of projects and experiences that showcase your skills and accomplishments to potential employers or clients."
        />
        <BenefitCard
          className="card"
          imageSrc={technology}
          heading="xposure to Cutting-Edge Technologies"
          para="Work on projects that leverage the latest technologies and trends, giving you hands-on experience with tools and platforms shaping the future of business."
        />
        <BenefitCard
          className="card"
          imageSrc={network}
          heading="Networking Opportunities"
          para="With Bigstartups Network, there are no regional barriers. Expand your horizons and connect with talent beyond borders."
        />
      </div>
    </div>
  );
};

export default AdditionalBenefits;
