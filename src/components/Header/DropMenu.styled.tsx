"use client";

import styled from "@emotion/styled";
import { colors, transition } from "styles/common/vars";

export const MobileDropMenu = styled.div`
  display: block;
  height: 100%;
  text-align: center;
  position: relative;
  z-index: 2;

  top: 0;
  @media screen and (min-width: 1200px) {
    display: none;
  }
`;

export const DropMenuHeader = styled.div`
  display: flex;
  height: 60px;

  justify-content: space-between;
  align-items: center;
`;

export const MenuButton = styled.button`
  cursor: pointer;
  width: 40px;
  height: 40px;
  padding: 0;
  border: none;

  background-color: transparent;
  color: ${colors.primaryWhite};

  transition: color ${transition.duration};

  &:hover,
  &:focus {
    color: ${colors.primaryBrandColor};
  }
`;

export const DropMenuNav = styled.nav`
  position: absolute;
  top: 60px;
  left: 0px;
  width: 100%;
  padding: 48px 40px;

  color: ${colors.primaryBlack};
  background-color: ${colors.primaryWhite};

  transition: opacity ${transition.duration}, visibility ${transition.duration},
    transform ${transition.duration};

  &.is-hidden {
    opacity: 0;
    visibility: hidden;
    pointer-events: none;

    transform: translateY(-100%);
  }
`;

export const MenuList = styled.ul`
  margin-bottom: 30px;

  font-size: 30px;
  line-height: 1.2;
  font-weight: 500;
`;

export const MenuItem = styled.li`
  &:not(:last-of-type) {
    margin-bottom: 15px;
  }

  a {
    display: inline-block;
    width: 100%;

    &.active {
      color: ${colors.primaryBrandColor};
    }
  }
`;
