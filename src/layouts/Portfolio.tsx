import { StyledPortfolio } from "../styles/Layout.styles";
import { workExperiences } from "../constants/contents";
import WorkExperience from "../components/WorkExperience";

const Portfolio = () => {
  return (
    <StyledPortfolio>
      <div className="workExperience">
        <span className="badge">Work Experience</span>
        {workExperiences.map((workExperience, index) => (
          <WorkExperience key={index} {...workExperience} />
        ))}
      </div>
    </StyledPortfolio>
  );
};

export default Portfolio;
