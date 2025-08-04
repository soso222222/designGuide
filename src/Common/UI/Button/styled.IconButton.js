import styled, { css } from "styled-components";

export const Wrapper = styled.button`
  ${({
    theme: { button, colors },
    themeName = "normal",
    bg,
    size,
    width,
    isBorder,
  }) => {
    const themeProps = button.theme[themeName];
    const themeBtn = button.size[size];
    // const propsSize = size ? size : "lg";
    // const propsTheme = Theme ? Theme : "normal";

    return css`
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 12rem;
      ${width && `width: ${width}rem;`}
      text-indent: -999px;
      ${themeBtn}
      padding: 0;
      border: ${isBorder ? `1px solid ${colors.Border10};` : "none;"}
      border-radius: 4rem;
      background-color: ${() => (bg ? bg : "transparent")};
      vertical-align: middle;
      cursor: pointer;
      font-family: inherit;
      overflow: hidden;
      transition: all 0.3s;
      appearance: none;
      -webkit-appearance: none;
    `;
  }}
`;
