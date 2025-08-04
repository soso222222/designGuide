import styled, { css } from "styled-components";

export const Wrapper = styled.ul`
`;

export const SubItemGroup = styled.ul`
  ${({ theme: { submenu }, size }) => {
    const radius = submenu.size[size].radius;
    return css`
      height: 0;
      margin-top: 2rem;
      min-width: 100rem;
      border-radius: ${radius};
      overflow: hidden;
      transition: height 0.3s;
    `;
  }}
`;

export const ItemWrapper = styled.li`
  ${({ gap }) => {
    return css`
      margin: ${gap}rem 0 ${gap}rem 0;
      min-width: 100rem;
    `;
  }}
`;


export const SubItemWrapper = styled.li`
  ${({ theme: { submenu, colors }, size }) => {
    const radius = submenu.size[size].radius;
    return css`
      min-width: 100rem;
      border-bottom: 1px solid ${colors.Border10};

      &:first-child {
        border-top-left-radius: ${radius};
        border-top-right-radius: ${radius};
      }
      &:last-child {
        border-bottom-left-radius: ${radius};
        border-bottom-right-radius: ${radius};
        border-bottom: none;
      }
    `;
  }}
`;

export const Item = styled.a`
  ${({ theme: { colors, menu }, size, isActive }) => {
    const height = menu.size[size].height;
    const fontSize = menu.size[size].fontSize;
    const padding = menu.size[size].padding;
    const radius = menu.size[size].radius;

    return css`
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;

      // line-height: 32px;
      // border-radius: 4rem;
      // padding-left: 28px;
      // padding-right: 20px;

      line-height: ${height};
      font-size: ${fontSize};
      padding: 0 5rem;
      // padding: ${padding};
      border: 1px solid transparent;
      border-radius: ${radius};
      cursor: pointer;
      font-family: inherit;
      color: ${colors.Text05};
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      transition: all 0.3s;

      &:hover {
        border: 1px solid ${colors.Border10};
        background-color: ${colors.H_Bg03};
        color: ${colors.Orange08};
      }
      &.active {
        border: 1px solid ${colors.LightOrange08};
      }
      &.active + ul {
        border: 1px solid ${colors.Border10};
      }
      &.active svg.angleup {
        display: block;
      }
      &:not(.active) svg.angleup {
        display: none;
      }
      &.active svg.angledown {
        display: none;
      }
      &:not(.active) svg.angledown {
        display: block;
      }
    `;
  }}
`;


export const SubItem = styled.a`
  ${({ theme: { colors, submenu }, size }) => {
    const height = submenu.size[size].height;
    const fontSize = submenu.size[size].fontSize;
    const padding = submenu.size[size].padding;

    return css`
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;

      line-height: ${height};
      font-size: ${fontSize};
      padding: ${padding};
      cursor: pointer;
      font-family: inherit;
      color: ${colors.Text05};
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      transition: all 0.3s;

      &::before {
        content: "";
        position: absolute;
        left: 10rem;
        top: 50%;
        transform: translate(0, -50%);
        width: 6rem;
        height: 6rem;
        border-radius: 50rem;
        background-color: ${colors.Text03};
        opacity: 0.3;
      }
      &:hover {
        background-color: ${colors.H_Bg03};
        color: ${colors.Orange08};
      }
      &:hover::before {
        background-color: ${colors.Text05};
      }

      &.active {
        background-color: ${colors.H_Bg05};
        color: ${colors.Orange08};
        font-weight: 700;
      }
      &.active::before {
        background-color: ${colors.Text08};
      }
    `;
  }}
`;



export const LeftItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: inherit;

  svg {
    margin-right: 5rem;
  }
  span {
    font-weight: 100;
    color: inherit;
  }
`;


export const RightItem = styled.div`
  //
`;