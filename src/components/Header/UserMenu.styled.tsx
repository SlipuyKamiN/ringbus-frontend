"use client";
import styled from "@emotion/styled";
import { ListItem } from "./Header.styled";
import { colors, transition } from "styles/common/vars";

export const NavListUserItem = styled(ListItem)`
  position: relative;

  transition: transform ${transition.duration};
  a {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  a:hover + ul,
  a:focus + ul {
    pointer-events: all;
    opacity: 1;
    transform: translateY(0);
  }
`;

export const SubMenu = styled.ul`
  position: absolute;
  pointer-events: none;

  overflow-y: hidden;

  transform: translateY(100%);

  top: 60px;
  left: -10%;
  padding: 5%;

  opacity: 0;

  width: 120%;

  background-color: ${colors.primaryBlackAlpha};
  transition: transform ${transition.duration};
`;
