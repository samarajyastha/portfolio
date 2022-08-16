import { StyledCertificates } from "../styles/Component.styles";

interface Props {
  certificates: string[];
}

const Certificates = ({ certificates }: Props) => {
  return (
    <StyledCertificates>
      {certificates.map((certificate, index) => (
        <p key={index}>- {certificate}</p>
      ))}
    </StyledCertificates>
  );
};

export default Certificates;
