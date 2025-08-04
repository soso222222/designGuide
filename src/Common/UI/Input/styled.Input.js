import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme: { colors, icon }, width, iconSize }) => {
    const radius = icon.size[iconSize].radius;
    return css`
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 150rem;
      ${width && `width: ${width}rem;`}
      border: 1px solid ${colors.Border10};
      border-radius: ${radius};
      background-color: ${colors.Bg10};
    `;
  }}
`;

export const Name = styled.label`
  //   min-width: 35px;
  height: 100%;
  line-height: 100%;
  text-align: center;
  padding: 0 8px;
`;



export const InputWrapper = styled.input`
  ${({ theme: { input }, size}) => {
    const inputSize = input.size[size];

    return css`
      display: inline-block;
      width: 100%;
      // height: 100%;
      // padding: 0;
      // font-size: 14px;
      ${inputSize}
      margin: 0;
      border: none;
      color: inherit;
      background-color: #ffffff;
      box-sizing: border-box;
      vertical-align: middle;
      outline: 0;
      font-family: inherit;
      transition: all 0.3s;
      appearance: none;
      -webkit-appearance: none;
    `;
  }}
`;