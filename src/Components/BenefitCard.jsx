import React from "react";

const BenefitCard = ({ imageSrc, heading, para }) => {
  return (
    <div className="benefit-card">
      <img src={imageSrc} alt="" />
      <h2>{heading}</h2>
      <p>{para}</p>
    </div>
  );
};

export default BenefitCard;
