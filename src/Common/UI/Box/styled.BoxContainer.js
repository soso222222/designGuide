import styled, { css } from "styled-components";

export const Wrapper = styled.section`
  ${({ theme: { colors }, columns, rows, gap, margin, padding }) => {
    return css`
      display: grid;
      ${columns && `grid-template-columns: repeat(${columns}, 1fr);`}
      ${rows && `grid-template-rows: repeat(${rows}, 1fr);`}
      gap: ${gap};
      margin: ${margin};
      padding: ${padding};
    `;
  }}
`;