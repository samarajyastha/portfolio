import { StyledProgrammingSkills } from "../styles/Component.styles";

interface Props {
  programmingSkills: string[];
}

const ProgrammingSkills = ({ programmingSkills }: Props) => {
  return (
    <StyledProgrammingSkills>
      {programmingSkills.map((skill, index) => (
        <span key={index}>{skill}</span>
      ))}
    </StyledProgrammingSkills>
  );
};

export default ProgrammingSkills;
