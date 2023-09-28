"use client";
import styled from "@emotion/styled";
import "styles/common/_vars.scss";
import { colors } from "styles/common/vars";

export const PageHeader = styled.header`
  position: sticky;
  z-index: 2;
  width: 100%;
  height: 60px;

  background-color: ${colors.primaryBlackAlpha};
  backdrop-filter: blur(4px);
  color: ${colors.primaryWhite};
`;

export const HeaderWrapper = styled.div`
  display: none;

  @media screen and (min-width: 1200px) {
    display: flex;
    height: 100%;
    justify-content: space-between;
    align-items: center;
  }
`;

export const HeaderList = styled.ul`
  display: flex;
  align-items: center;
  gap: 50px;
`;

export const ListItem = styled.li`
  & > a {
    display: block;
    padding: 18px 0;
    border-bottom: 2px solid transparent;

    &:hover,
    &:focus {
      color: ${colors.primaryBrandColor};
    }

    &.active {
      color: ${colors.primaryBrandColor};
      border-bottom: 2px solid ${colors.primaryBrandColor};
    }
  }
`;
