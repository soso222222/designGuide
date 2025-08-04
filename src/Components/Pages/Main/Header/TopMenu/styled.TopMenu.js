import styled, { css } from "styled-components";

export const Wrapper = styled.h1`
  height: 100%;
`;

export const TopItem = styled.div`
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20rem;
`;

export const TopleftItem = styled.div`
  position: relative;
`;
export const ToprightItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Mode = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ModeItem = styled.li`
  float: left;

  a {
    padding: 6px 18px;
    border-radius: unset;
  }
`;

export const User = styled.ul`
  li {
    float: left;
    line-height: 40px;
  }
  li + li {
    margin-left: 35px;
  }
  li > a {
    position: relative;
    display: block;
  }
  li:not(.account) > a > i {
    opacity: 0.8;
  }
  li:not(.account) > a:hover i {
    opacity: 1;
  }
  li.account {
    margin: 0 5px 0 35px;
  }
  li.account > a {
    overflow: hidden;
    border-radius: 50px;
  }
  li.account img {
    width: 40px;
    height: 40px;
  }
`;

export const Gnb = styled.nav`
    position: relative;
    ul {
        display: inline-flex;
        gap: 30rem;
    }
    li {
        box-sizing: border-box;
    }
    li span {
        display: block;
        text-align: right;
    }
    li span.en {
        font-weight: 500;
        font-size: 18px;
        padding-bottom: 0.2em;
    }
    li span.kr {
        position: relative;
        display: flex;
        justify-content: flex-end;
        font-size: 20px;
    }
    li span.kr::before {
        content: "";
        position: absolute;
        left: -5px;
        bottom: -10px;
        width: 0;
        height: 100%;
        background: var(--Pu_300);
    }
    li:hover span.kr::before {
        width: 100%;
        transition: all 0.4s ease-out;
    }
`;

export const Title = styled.div`
  ${({ theme: { colors } }) => {

    return css`
      height: 50%;
      display: flex;
      align-items: center;
      padding: 0 20rem;
      border-top: 1px solid ${colors.Border10};
      h2 {
        font-size: 22rem;
        letter-spacing: 0.03em;
      }
    `;
  }}
`;

export const Photo = styled.img`
  width: 36rem;
  height: 36rem;
  border-radius: 50%;
  overflow: hidden;
  box-sizing: border-box;
  border-radius: 50px;
`;