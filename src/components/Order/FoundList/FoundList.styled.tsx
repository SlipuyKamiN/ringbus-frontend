"use client";
import styled from "@emotion/styled";
import { Container } from "components/Shared/Container.styled";
import { colors } from "styles/common/vars";

export const ContentWrapper = styled(Container)`
  border-radius: 15px;
  padding: 35px;

  text-align: center;

  background-color: ${colors.primaryBlackAlpha};
  backdrop-filter: blur(4px);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.24), 0px 6px 6px rgba(0, 0, 0, 0.12),
    2px 6px 8px rgba(0, 0, 0, 0.32);
`;

export const List = styled.ul`
  margin-top: 20px;
`;
