import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  grid-column: 1 / 4;
  grid-row: 1 / 3;
  // width: 100%;
  height: 100vh;
  background-image: linear-gradient(154deg, #b392ac 0, #e8c2ca 100%);
`;

export const UserBox = styled.section`
  ${({ theme: { elevation } }) => {
    const shadow = elevation["Elevation__001"];

    return css`
      position: fixed;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 60%;
      display: grid;
      grid-template-columns: 1fr 1fr;
      min-height: 300rem;
      box-sizing: border-box;
      background-color: #ffffff;
      overflow: hidden;
      box-shadow: ${shadow};
    `;
  }}
`;

export const LoginBox = styled.section`
  grid-column: 1 / 2;
  display: flex;
  // align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 10%;

  h2 {
    margin-bottom: 5rem;
    font-family: "Montserrat Regular";
  }
`;

export const Text = styled.p`
  font-family: "Montserrat Regular";
  margin-bottom: 20rem;
`;

export const FormBox = styled.ul`
  margin-bottom: 20rem;

  li {
    margin-bottom: 5rem;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    font-family: "Montserrat Regular";
    font-size: 14rem;
    font-weight: 200;
    font-style: italic;
  }
  a:hover {
    text-decoration: underline;
  }
`;


export const RegisterBox = styled.section`
  ${({ theme: { colors } }) => {
    return css`
      grid-column: 2 / 3;
      display: flex;
      // align-items: center;
      justify-content: center;
      flex-direction: column;
      background-color: ${colors.DarkPurple10};
      padding: 0 10%;
      text-align: center;

      h3 {
        font-family: "Montserrat Regular";
        margin-bottom: 10rem;
        color: #fff;
      }
      p {
        color: #fff;
      }
    `;
  }}
`;