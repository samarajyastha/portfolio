import { StyledProjects } from "../styles/Component.styles";

interface Props {
  projects: string[];
}

const Projects = ({ projects }: Props) => {
  return (
    <StyledProjects>
      {projects.map((project, index) => (
        <p key={index}>- {project}</p>
      ))}
    </StyledProjects>
  );
};

export default Projects;
