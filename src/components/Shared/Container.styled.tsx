"use client";
import styled from "@emotion/styled";

export const Container = styled.div`
  max-width: 375px;
  margin: 0 auto;
  padding: 0 15px;

  outline: 1px solid tomato;

  @media screen and (min-width: 375px) {
    max-width: none;
    width: 375px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1200px) {
    width: 1200px;
  }
`;
