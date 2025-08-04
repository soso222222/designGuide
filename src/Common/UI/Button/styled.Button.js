import styled, { css } from "styled-components";

export const Wrapper = styled.button`
  ${({ theme: { button, colors }, themeName = "normal", bg, size, width }) => {
    const themeProps = button.theme[themeName];
    const themeBtn = button.size[size];

    return css`
      display: inline-block;
      position: relative;
      min-width: 50rem;
      ${width && `width: ${width}rem;`}
      //   height: 35px;
      //   padding: 0 0.8em;
      ${themeBtn}
      border: 1px solid ${colors.Border10};
      border-radius: 4rem;
      background: transparent;
      background-color: ${() => (bg ? bg : "transparent")};
      vertical-align: middle;
      text-align: center;
      cursor: pointer;
      font-family: inherit;
      font-weight: 400;
      overflow: hidden;
      transition: all 0.3s;
      appearance: none;
      -webkit-appearance: none;
    `;
  }}
`;
