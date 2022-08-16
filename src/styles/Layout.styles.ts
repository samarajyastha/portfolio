import styled from "styled-components";

import * as palette from "../constants/colors";

export const StyledPortfolio = styled.div`
  padding: 1rem 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  .badge {
    background-color: ${palette.primaryBgColor};
    color: ${palette.primaryColor};
    font-family: "MontserratMedium";
    font-size: 0.8rem;
    padding: 0 0.5rem;
  }

  div div {
    margin: 0.25rem 0;
  }
`;
