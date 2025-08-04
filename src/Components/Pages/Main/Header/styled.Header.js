import styled, { css } from "styled-components";

export const TopWrapper = styled.header`
  ${({ theme: { elevation, colors } }) => {
    return css`
      grid-column: 2/3;
      height: 110rem;
      z-index: 10000;
      box-shadow: ${elevation["Elevation__002"]};
      border-bottom: 1px solid ${colors.Border10};
      background-color: #fff;
      transition: width 0.8s;
    `;
  }}
`;

export const LeftWrapper = styled.section`
  ${({ theme: { elevation, colors } }) => {
    return css`
      grid-column: 1/2;
      grid-row: 1/3;
      z-index: 10000;
      //   box-shadow: ${elevation["Elevation__002"]};
      border-right: 1px solid ${colors.Border10};
      background-color: #fff;
      transition: width 0.8s;
    `;
  }}
`;