import React from "react";
import talent from "../Images/talent.png";
import solutions from "../Images/solutions.png";
import expansion from "../Images/expansion.png";
import cost from "../Images/cost saving.png";
import hiring from "../Images/hiring.png";
import geography from "../Images/geography.png";

const OpportunityCard = ({ imageSrc, title, description, card }) => {

  return (
    <div
      className={
        card === "lastCard"
          ? "opportunity-card startup-benefit-card last-card"
          : "opportunity-card startup-benefit-card"
      }
    >
      <img src={imageSrc} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

const StartupBenefits = () => {
  return (
    <div className="key-benefits">
      <h1>Key benefits for startups?</h1>
      <div className="opportunities-section">
        <div className="left">
          <OpportunityCard
            imageSrc={talent}
            title="Access to Diverse Talent"
            description="By tapping into a global talent pool, startups can benefit from a wide range of perspectives, experiences, and skills. This diversity fosters innovation and creativity within the team, leading to fresh ideas and unique solutions to challenges."
          />
          <OpportunityCard
            imageSrc={solutions}
            title="Tailored Solutions"
            description="Student resources can be tailored to meet the specific needs of startups, whether it's in the form of project-based work, part-time assistance, or specialized skills. This flexibility allows startups to scale their workforce according to demand without committing to long-term contracts or excessive expenses."
          />
          <OpportunityCard
            imageSrc={expansion}
            title="Global Expansion Opportunities"
            description="Building relationships with individuals from different backgrounds and cultures not only enriches the startup's internal culture but also provides valuable insights and connections that can facilitate international growth and market penetration."
          />
        </div>
        <div className="right">
          <OpportunityCard
            imageSrc={cost}
            title="Cost Savings"
            description="Startups often operate on tight budgets, and accessing cost-effective student resources can be a game-changer. By leveraging student talent, startups can reduce their overhead costs associated with hiring while still accessing high-quality skills and services."
          />
          <OpportunityCard
            imageSrc={hiring}
            title="Flexible Hiring Models"
            description="The ability to choose from a variety of hiring options, including full-time employees, interns, or freelancers, gives startups the freedom to structure their teams in a way that best suits their current stage of growth and objectives."
          />
          <OpportunityCard
            card="lastCard"
            imageSrc={geography}
            title=" Breaking Down Geographic Barriers"
            description="Network, startups can overcome these barriers and connect with talent from around the world. This opens up new possibilities for collaboration and expansion, allowing startups to build diverse and dynamic teams regardless of location."
          />
        </div>
      </div>
    </div>
  );
};

export default StartupBenefits;
