import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme: { colors } }) => {
    return css`
      color: ${colors.Orange08};
    `;
  }}
`;

export const Logo = styled.div`
  ${({ theme: { elevation, colors } }) => {
    return css`
      width: 100%;
      height: 110rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-bottom: 1px solid ${colors.Border10};
      box-shadow: ${elevation["Elevation__002"]};
      background-color: ${colors.LogoBg10};
    `;
  }}
`;
export const Photo = styled.img`
  max-width: 100rem;
`;


export const Nav = styled.nav`
  color: inherit;
  padding: 0 15rem 100rem 15rem;

  h3 {
    font-size: 16rem;
    font-weight: 500;
    color: inherit;
    margin-top: 20rem;
    margin-bottom: 4rem;
  }
`;