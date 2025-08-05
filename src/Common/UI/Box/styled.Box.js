import styled, { css } from "styled-components";


export const BoxContainer = styled.div`
  ${({ theme: { colors } }) => {
    return css`
      background-color: ${colors.White};
      padding: 10rem 15rem 20rem 15rem;
      border: 1px solid ${colors.H_Bg10};
      border-radius: 4rem;
      font-size: 14rem;

      h3 {
        color: ${colors.H_Text10};
        font-size: 16rem;
        font-weight: 700;
        margin: 10rem 5rem;
      }
    `;
  }}
`;