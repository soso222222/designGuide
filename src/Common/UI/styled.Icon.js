import styled from "styled-components";
import { isNum } from "../Utils/common";

export const Svg = styled.svg`
  ${({ size, fill, theme: { colors, icon } }) => {
    return ` 
        width: ${isNum(size) ? size + "rem" : icon.size[size].width};
        fill: ${fill ? fill : colors.Text07};
        text-indent: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        `;
  }}
`;