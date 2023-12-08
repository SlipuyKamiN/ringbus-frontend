"use client";
import styled from "@emotion/styled";
import { colors } from "styles/common/vars";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 23;

  width: 100dvw;
  height: 100dvh;

  padding: 0 20px;

  backdrop-filter: blur(4px);
  background-color: ${colors.primaryWhiteAlpha};
`;

export const ModalWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  max-height: 80%;
  overflow-y: auto;

  border-radius: 16px;
  padding: 32px;

  background-color: ${colors.primaryBlackAlpha};

  @media screen and (min-width: 768px) {
    max-width: 900px;

    border-radius: 30px;
  }
`;
