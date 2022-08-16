import { StyledPersonalDetails } from "../styles/Component.styles";

interface Props {
  personalDetails: {
    field: string;
    value: string;
    link?: boolean;
  }[];
}

const PersonalDetails = ({ personalDetails }: Props) => {
  return (
    <StyledPersonalDetails>
      <tbody>
        {personalDetails.map(({ field, value, link }, index) => (
          <tr key={index}>
            <td>{field}: </td>
            <td>{link ? <a href={value}>{value}</a> : value}</td>
          </tr>
        ))}
      </tbody>
    </StyledPersonalDetails>
  );
};

export default PersonalDetails;
