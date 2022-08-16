import { StyledEducation } from "../styles/Component.styles";

interface Props {
  college: string;
  collegeUrl: string;
  degree: string;
  duration: string;
}

const Education = ({ college, collegeUrl, degree, duration }: Props) => {
  return (
    <StyledEducation>
      <div className="college">
        <h2>{degree}</h2>
        <a href={collegeUrl} target="_blank" rel="noreferrer">
          {college}
        </a>
        <span>{duration}</span>
      </div>
    </StyledEducation>
  );
};

export default Education;
