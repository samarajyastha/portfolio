import styled from "styled-components";

import * as palette from "../constants/colors";

export const StyledDescription = styled.section`
  p {
    color: ${palette.primaryTextColor};
    text-align: justify;
  }
`;

export const StyledWorkExperience = styled.div`
  .company {
    h2 {
      color: ${palette.primaryTextColor};
      font-family: "NunitoExtraLight";
      font-size: 1.1rem;
    }

    a {
      color: ${palette.primaryColor};
      font-size: 0.9rem;
      text-decoration: none;
    }

    span {
      color: ${palette.primaryTextColor};
      display: block;
      font-size: 0.7rem;
      font-style: italic;
    }
  }

  .work {
    margin: 0.5rem 0;

    p {
      color: ${palette.primaryTextColor};
    }
  }
`;
