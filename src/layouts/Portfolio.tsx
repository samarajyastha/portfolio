import {
  programmingSkills,
  skills,
  workExperiences,
} from "../constants/contents";
import { StyledPortfolio } from "../styles/Layout.styles";
import ProgrammingSkills from "../components/ProgrammingSkills";
import Skills from "../components/Skills";
import WorkExperience from "../components/WorkExperience";

const Portfolio = () => {
  return (
    <StyledPortfolio>
      <div>
        <div className="workExperience">
          <span className="badge">Work Experience</span>
          {workExperiences.map((workExperience, index) => (
            <WorkExperience key={index} {...workExperience} />
          ))}
        </div>
      </div>
      <div>
        <div className="skills">
          <span className="badge">Skills</span>
          <Skills skills={skills} />
        </div>
        <div className="programmingSkills">
          <span className="badge">Programming Skills</span>
          <ProgrammingSkills programmingSkills={programmingSkills} />
        </div>
        <div className="skills">
          <span className="badge">Skills</span>
          <Skills skills={skills} />
        </div>
      </div>
    </StyledPortfolio>
  );
};

export default Portfolio;
