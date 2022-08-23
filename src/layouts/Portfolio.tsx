import {
  certificates,
  education,
  interests,
  language,
  personalDetails,
  programmingSkills,
  projects,
  skills,
  workExperiences,
  works,
} from "../constants/contents";
import { StyledPortfolio } from "../styles/Layout.styles";
import Certificates from "../components/Certificates";
import Education from "../components/Education";
import Interests from "../components/Interests";
import PersonalDetails from "../components/PersonalDetails";
import ProgrammingSkills from "../components/ProgrammingSkills";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import WorkExperience from "../components/WorkExperience";
import Works from "../components/Works";

const Portfolio = () => {
  return (
    <StyledPortfolio>
      <div>
        <div className="workExperience">
          <span className="badge">work experience</span>
          {workExperiences.map((workExperience, index) => (
            <WorkExperience key={index} {...workExperience} />
          ))}
        </div>

        <div className="certificates">
          <span className="badge">certificates</span>
          <Certificates certificates={certificates} />
        </div>

        <div className="personalDetails">
          <span className="badge">personal details</span>
          <PersonalDetails personalDetails={personalDetails} />
        </div>
      </div>
      <div>
        <div className="skills">
          <span className="badge">skills</span>
          <Skills skills={skills} />
        </div>

        <div className="programmingSkills">
          <span className="badge">programming skills</span>
          <ProgrammingSkills programmingSkills={programmingSkills} />
        </div>

        <div className="education">
          <span className="badge">education</span>
          <Education {...education} />
        </div>

        <div className="projects">
          <span className="badge">projects</span>
          <Projects projects={projects} />
        </div>

        <div className="works">
          <span className="badge">works</span>
          <Works works={works} />
        </div>

        <div className="interests">
          <span className="badge">interests</span>
          <Interests interests={interests} />
        </div>

        <div className="language">
          <span className="badge">language</span>
          <p>- {language}</p>
        </div>
      </div>
    </StyledPortfolio>
  );
};

export default Portfolio;
