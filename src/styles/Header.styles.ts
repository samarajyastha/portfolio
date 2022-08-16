import styled from "styled-components";

import * as palette from "../constants/colors";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  margin: 0.5rem 0;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Title = styled.div`
  align-items: center;
  display: flex;
  grid-column-gap: 1rem;

  img {
    border-radius: 50%;
    margin-top: 1rem;
    max-width: 128px;
  }

  h1 {
    color: ${palette.primaryTextColor};
    font-family: "MontserratLight";
    font-size: clamp(2rem, 3vw, 3rem);
  }

  h4 {
    color: ${palette.primaryColor};
    font-family: "MontserratThin";
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;

    h1,
    h4 {
      text-align: center;
    }
  }
`;

export const Info = styled.ul`
  list-style: none;
  margin-top: 1.5rem;
`;

export const StyledList = styled.li`
  color: ${palette.primaryColor};
  font-size: 1rem;
  text-align: right;
  white-space: nowrap;

  a {
    color: ${palette.primaryColor};
    font-size: 1rem;
    text-decoration: none;
  }

  i.right {
    margin-left: 0.5rem;
  }

  i.left {
    display: none;
  }

  @media (max-width: 768px) {
    text-align: left;

    i.right {
      display: none;
    }

    i.left {
      display: inline-block;
      margin-right: 0.5rem;
    }
  }
`;
