import { StyledSkills } from "../styles/Component.styles";

interface Props {
  skills: string[];
}

const Skills = ({ skills }: Props) => {
  return (
    <StyledSkills>
      {skills.map((skill, index) => (
        <span key={index}>{skill}</span>
      ))}
    </StyledSkills>
  );
};

export default Skills;
