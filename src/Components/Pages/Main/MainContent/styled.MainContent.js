import styled, { css } from "styled-components";

export const Wrapper = styled.main`
  ${({ theme: { colors } }) => {
    return css`
      grid-column: 2 / 3;
      grid-row: 2 / 3;
      background-color: ${colors.L_Bg10};
      padding: 20rem 30rem 100rem 30rem;
    `;
  }}
`;
