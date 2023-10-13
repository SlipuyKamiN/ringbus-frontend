"use client";

import styled from "@emotion/styled";
import { colors, transition } from "styles/common/vars";

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  row-gap: 20px;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 5px;
    justify-content: space-between;

    width: 50%;

    &:last-of-type {
      width: 100%;
    }
  }
`;

export const FormTitle = styled.h2`
  font-size: 28px;
  font-weight: 700;
`;

export const OrderTypeLabel = styled.label`
  cursor: pointer;
  display: flex;

  border-radius: 4px;
  color: ${colors.primaryWhite};

  & input:checked + span {
    border-color: ${colors.primaryBrandColor};
    color: ${colors.primaryBrandColor};
  }
`;

export const HiddenRadioButton = styled.input`
  visibility: hidden;
  position: absolute;
  pointer-events: none;
  top: 0;
  left: -1px;
  opacity: 0;
`;

export const OrderTypeText = styled.span`
  border: 2px solid ${colors.primaryWhite};
  border-radius: 15px;
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 5px;

  transition: fill ${transition.duration}, border-color ${transition.duration},
    color ${transition.duration};

  &:hover,
  &:focus {
    border-color: ${colors.primaryBrandColor};
    color: ${colors.primaryBrandColor};
  }
`;

export const SelectorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 5px;
`;

export const DateSelector = styled.input`
  width: 100%;
  height: 40px;
  border: transparent;
  padding: 5px 10px;
  border-radius: 4px;
  background-color: ${colors.primaryWhiteAlpha};
`;

export const ErrMessage = styled.span`
  max-width: 100%;
  font-size: 14px;
  color: red;
`;

export const SearchButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  gap: 5px;

  width: 250px;
  padding: 10px 20px;

  border-radius: 14px;

  color: inherit;
  background-color: transparent;
  border: 2px solid ${colors.primaryWhite};

  transition: color ${transition.duration}, border-color ${transition.duration};

  &:hover,
  &:focus {
    color: ${colors.primaryBrandColor};
    border: 2px solid ${colors.primaryBrandColor};
  }
`;
