import styled from "@emotion/styled";
import { colors, transition } from "styles/common/vars";

export const Form = styled.form`
  border-radius: 15px;
  padding: 15px;

  text-align: center;

  background-color: ${colors.primaryBlackAlpha};
  backdrop-filter: blur(4px);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.24), 0px 6px 6px rgba(0, 0, 0, 0.12),
    2px 6px 8px rgba(0, 0, 0, 0.32);
`;

export const ServiceTypeLabel = styled.label`
  cursor: pointer;
  display: flex;

  border-radius: 4px;
  color: ${colors.primaryWhite};

  & input:checked + .route-form__service-type-wrapper {
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

export const ServiceTypeText = styled.span`
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

  svg {
    fill: currentColor;
  }
`;
