import { StyledWorks } from "../styles/Component.styles";

interface Props {
  works: {
    title: string;
    url: string;
  }[];
}

const Works = ({ works }: Props) => {
  return (
    <StyledWorks>
      {works.map((work, index) => (
        <a key={index} href={work.url} target="_blank" rel="noreferrer">
          - {work.title}
        </a>
      ))}
    </StyledWorks>
  );
};

export default Works;
