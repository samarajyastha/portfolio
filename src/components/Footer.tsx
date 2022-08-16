import { StyledFooter } from "../styles/Footer.styles";

interface Props {
  declaration: string;
}

const Footer = ({ declaration }: Props) => {
  return <StyledFooter>{declaration}</StyledFooter>;
};

export default Footer;
