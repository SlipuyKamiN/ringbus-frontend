"use client";

import styled from "@emotion/styled";
import Link from "next/link";
import { colors, transition } from "styles/common/vars";

export const Hero = styled.section`
  padding: 40px 0 20px;
`;

export const HeroWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const HeroTitle = styled.h1`
  margin: 0 auto 24px;

  text-align: center;
  font-size: 26px;
  line-height: 1.6;
  letter-spacing: 0.06em;
  text-transform: uppercase;

  @media screen and (min-width: 1200px) {
    margin-bottom: 44px;
    font-size: 44px;
  }
`;

export const HeroDescription = styled.p`
  margin-bottom: 24px;

  @media screen and (min-width: 1200px) {
    margin-bottom: 0;
    max-width: 45%;
  }
`;

export const FindLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 10px;

  padding: 10px;
  border-radius: 15px;
  border: 2px solid ${colors.primaryWhite};

  transition: background-color ${transition.duration};

  &:hover,
  &:focus {
    color: ${colors.primaryBrandColor};
    border-color: ${colors.primaryBrandColor};
    background-color: ${colors.primaryBlackAlpha};
  }
`;
