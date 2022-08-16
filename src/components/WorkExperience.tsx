import { StyledWorkExperience } from "../styles/Component.styles";

interface Props {
  achievements: string[];
  company: string;
  companyUrl: string;
  designation: string;
  duration: string;
}

const WorkExperience = ({
  achievements,
  company,
  companyUrl,
  designation,
  duration,
}: Props) => {
  return (
    <StyledWorkExperience>
      <div className="company">
        <h2>{designation}</h2>
        <a href={companyUrl} target="_blank" rel="noreferrer">
          {company}
        </a>
        <span>{duration}</span>
      </div>
      <div className="work">
        {achievements.map((achievement, index) => (
          <p key={index}>- {achievement}</p>
        ))}
      </div>
    </StyledWorkExperience>
  );
};

export default WorkExperience;
