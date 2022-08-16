import { StyledDescription } from "../styles/Description.styles";

interface Props {
  description: string;
}

const Description = ({ description }: Props) => {
  return (
    <StyledDescription>
      <p>{description}</p>
    </StyledDescription>
  );
};

export default Description;
