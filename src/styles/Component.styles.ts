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

export const StyledSkills = styled.div`
  margin-top: 0.5rem;

  span {
    background-color: ${palette.pill_1};
    border-radius: 3px;
    color: ${palette.white};
    display: inline-block;
    font-family: "NunitoRegular";
    font-size: 0.85rem;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
    padding: 0.1rem 0.5rem;
    white-space: nowrap;
  }
`;

export const StyledProgrammingSkills = styled.div`
  margin-top: 0.5rem;

  span {
    background-color: ${palette.pill_2};
    border-radius: 3px;
    color: ${palette.white};
    display: inline-block;
    font-family: "NunitoRegular";
    font-size: 0.85rem;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
    padding: 0.1rem 0.5rem;
    white-space: nowrap;
  }
`;
