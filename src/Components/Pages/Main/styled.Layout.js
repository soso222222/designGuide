import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  // grid-template-columns: minmax(200rem, 1fr) 7fr;
  grid-template-columns: minmax(240rem, 12%) 88%;
  grid-template-rows: 1fr 10fr;
  background-color: var(--C_Bg10);
  transition: grid-template-columns 0.8s;

  &.zoom {
    // grid-template-columns: 0fr 10fr;
    grid-template-columns: 0% 100%;
  }
`;

export const Hidden = styled.span`
    position: absolute;
    left: -9999px;
`;