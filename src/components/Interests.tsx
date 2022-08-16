import { StyledInterests } from "../styles/Component.styles";

interface Props {
  interests: string[];
}

const Interests = ({ interests }: Props) => {
  return (
    <StyledInterests>
      {interests.map((interest, index) => (
        <span key={index}>{interest}</span>
      ))}
    </StyledInterests>
  );
};

export default Interests;
