"use client";
import styled from "@emotion/styled";
import { colors } from "styles/common/vars";

export const LoaderWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  gap: 5px;

  color: inherit;
  background-color: transparent;

  &.is-loading {
    cursor: wait;
    border-color: ${colors.primaryWhiteAlpha};
    color: ${colors.primaryWhiteAlpha};

    span {
      padding-left: 43px;
      animation: title 2.5s linear 0.7s infinite;
      text-shadow: 0 0 6px #bce4ff;
    }

    svg {
      position: absolute;
      left: 0px;
      height: 22px;

      border-radius: 2px;
      fill: transparent;
      background: #bce4ff;
      box-shadow: 0 0 15px #bce4ff;
      animation: blink 5s infinite;
    }
  }
`;
