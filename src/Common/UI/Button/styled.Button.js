import styled, { css } from "styled-components";

export const Wrapper = styled.button`
  ${({ theme: { button, colors }, themeName, bg, size, width }) => {
    const themeProps = button.theme[themeName];
    const themePropHover = button.theme[themeName].hover;
    const themeBtn = button.size[size];

    return css`
      display: inline-block;
      position: relative;
      min-width: 50rem;
      ${width && `width: ${width}rem;`}
      //   height: 35px;
      //   padding: 0 0.8em;
      border: 1px solid ${colors.Border10};
      background: transparent;
      ${themeProps}
      ${themeBtn}
      ${bg && `background-color: ${bg}`};
      border-radius: 4rem;
      vertical-align: middle;
      text-align: center;
      cursor: pointer;
      font-family: inherit;
      font-weight: 400;
      overflow: hidden;
      transition: all 0.3s;
      appearance: none;
      -webkit-appearance: none;

      &:hover {
        ${themePropHover}
      }
    `;
  }}
`;
