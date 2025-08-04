import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  // grid-template-columns: 1fr 7fr;
  grid-template-columns: minmax(200rem, 1fr) 7fr;
  grid-template-rows: 1fr 10fr;
  background-color: var(--C_Bg10);
`;

export const Hidden = styled.span`
    position: absolute;
    left: -9999px;
`;