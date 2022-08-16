import { Info, StyledHeader, StyledList, Title } from "../styles/Header.styles";

interface Props {
  designation: string;
  displayName: string;
  heroImage: string;
  info: {
    address: string;
    email: string;
    phone: string;
  };
}

interface InfoListProps {
  icon: string;
  link?: string;
  value: string;
}

const InfoList = ({ icon, link, value }: InfoListProps) => (
  <StyledList>
    <i className={`fal ${icon} left`}></i>
    {link ? <a href={link}>{value}</a> : value}
    <i className={`fal ${icon} right`}></i>
  </StyledList>
);

const Header = ({ heroImage, displayName, designation, info }: Props) => {
  return (
    <StyledHeader>
      <Title>
        <img src={heroImage} alt={displayName} />
        <div>
          <h1>{displayName}</h1>
          <h4>{designation}</h4>
        </div>
      </Title>

      <Info>
        <InfoList
          icon="fa-envelope"
          link={`mailto:${info.email}`}
          value={info.email}
        />
        <InfoList
          icon="fa-phone"
          link={`tel:${info.phone}`}
          value={info.phone}
        />
        <InfoList icon="fa-map-marker-alt" value={info.address} />
      </Info>
    </StyledHeader>
  );
};

export default Header;
