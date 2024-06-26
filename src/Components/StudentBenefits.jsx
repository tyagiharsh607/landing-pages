import React from 'react'
import opportunity from "../Images/opportunity.png"
import reach from "../Images/reach.png"
import flexibility from "../Images/flexibilty.png"
import career from "../Images/career.png"
import skill from "../Images/skill.png"
import networking from "../Images/network.png"


const OpportunityCard = ({ imageSrc, title, description }) => {
  return (
    <div className="opportunity-card">
      <img src={imageSrc} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

const StudentBenefits = () => {
  return (
    <div className="student-benefits">
      <h1>Key benefits for students?</h1>
      <div className="opportunities-section">
        <div className="left">
          <OpportunityCard
            imageSrc={opportunity}
            title="Diverse Opportunities"
            description="BigStartups Network opens doors to a wide array of opportunities, allowing individuals to explore exciting startup roles across industries and domains. This platform serves as a launching pad for careers in mobile, cloud, AI, and blockchain, enhancing one's professional experience and skill set."
          />
          <OpportunityCard
            imageSrc={flexibility}
            title="Flexibility"
            description="The platform offers flexibility in terms of employment arrangements, enabling users to choose between full-time, part-time, or freelancing opportunities. This level of flexibility ensures that individuals can find work that fits their lifestyle, making it easier to manage work-life balance with arrangements to suit their needs and preferences."
          />
          <OpportunityCard
            imageSrc={skill}
            title="Skill Development"
            description="Engaging with startups from diverse backgrounds provides a unique platform for continuous learning and growth. Whether through mentorship, project collaborations, or hands-on experiences, BigStartups Network ensures that individuals are constantly developing new skills and staying abreast of industry trends, enabling them to thrive in a dynamic, fast-paced work environment."
          />
        </div>
        <div className="right">
          <OpportunityCard
            imageSrc={reach}
            title="Global Reach"
            description="By transcending national boundaries, BigStartups Network enables individuals to access opportunities worldwide. This global reach offers greater possibilities for career growth and development, encouraging cross-cultural collaboration and networking, opening doors to international career advancement and personal growth."
          />
          <OpportunityCard
            imageSrc={career}
            title="Career Control"
            description="BigStartups Network puts individuals in the driver's seat of their career path, giving them more informed choices regarding their future. This control enables users to align their career trajectory with their interests and skills, and to pursue opportunities that resonate with their interests, skills, and aspirations."
          />
          <OpportunityCard
            imageSrc={networking}
            title="Networking Opportunities"
            description="By connecting with peers and professionals from different sectors, BigStartups Network fosters networking and collaboration. Users can gain valuable insights, share knowledge, and build relationships within the startup ecosystem, ensuring continuous professional development and collaboration within the global startup ecosystem."
          />
        </div>
      </div>
    </div>
  );
};


export default StudentBenefits
