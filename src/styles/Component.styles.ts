import styled, { css } from "styled-components";

import * as palette from "../constants/colors";

const BaseStylesExperienceEducation = css`
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
    font-family: "NunitoRegular";
    font-size: 0.7rem;
    font-style: italic;
  }
`;

const BaseStylesSkills = css`
  border-radius: 3px;
  color: ${palette.white};
  display: inline-block;
  font-family: "NunitoRegular";
  font-size: 0.85rem;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  padding: 0.1rem 0.5rem;
  white-space: nowrap;
`;

const BaseStylesList = css`
  p {
    color: ${palette.primaryTextColor};
  }
`;

export const StyledDescription = styled.section`
  margin: 1rem 0 0.5rem;

  p {
    color: ${palette.primaryTextColor};
    text-align: justify;
  }
`;

export const StyledWorkExperience = styled.div`
  .company {
    ${BaseStylesExperienceEducation}
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
    ${BaseStylesSkills}
    background-color: ${palette.pill_1};
  }
`;

export const StyledProgrammingSkills = styled.div`
  margin-top: 0.5rem;

  span {
    ${BaseStylesSkills}
    background-color: ${palette.pill_2};
  }
`;

export const StyledEducation = styled.div`
  .college {
    ${BaseStylesExperienceEducation}
  }
`;

export const StyledCertificates = styled.div`
  p {
    color: ${palette.primaryTextColor};
  }
`;

export const StyledProjects = styled.div`
  ${BaseStylesList}
`;

export const StyledPersonalDetails = styled.table`
  td {
    color: ${palette.primaryTextColor};
    font-size: 0.85rem;
    padding-right: 0.5rem;

    a {
      color: ${palette.primaryColor};
      text-decoration: none;
    }
  }
`;

export const StyledInterests = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  span {
    color: ${palette.primaryTextColor};
    font-size: 0.9rem;
  }
`;

export const StyledLanguage = styled.div``;
