"use client";
import styled from "@emotion/styled";

export const ContainerWrapper = styled.div`
  max-width: 480px;
  margin: 0 auto;
  padding: 0 15px;

  outline: 1px solid tomato;

  @media screen and (min-width: 480px) {
    max-width: none;
    width: 480px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1200px) {
    width: 1200px;
  }
`;
