"use client";
import styled from "@emotion/styled";
import { colors } from "styles/common/vars";
import { SearchButton } from "../OrderForm.styled";

export const ModalTable = styled.table`
  width: 100%;
`;

export const ModalTitle = styled.h2`
  font-size: 22px;
  line-height: 1.5;
  font-weight: 700;
  text-align: center;
  margin-bottom: 12px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const FormLabel = styled.label`
  margin-bottom: 4px;
`;

export const FormInput = styled.input`
  height: 40px;
  margin-bottom: 10px;
  padding: 5px 10px;

  font-size: 18px;

  border: 1px solid;
  border-radius: 4px;
  color: ${colors.primaryBlack};
  background-color: ${colors.primaryWhiteAlpha};
`;

export const TextArea = styled.textarea`
  resize: none;
  width: 100%;

  height: 80px;
  margin-bottom: 10px;
  padding: 5px 10px;

  font-size: 18px;

  border: 1px solid;
  border-radius: 4px;
  color: ${colors.primaryBlack};
  background-color: ${colors.primaryWhiteAlpha};
`;

export const ModalBtnsList = styled.ul`
  display: flex;
  gap: 10px;
  flex-grow: 1;
  justify-content: center;
`;

export const CancelBtn = styled(SearchButton)`
  font-weight: 600;
  text-transform: uppercase;
  color: ${colors.classicRedColor};
  border-color: ${colors.classicRedColor};
`;

export const SubmitBtn = styled(SearchButton)`
  font-weight: 600;
  text-transform: uppercase;
  color: ${colors.classicGreenColor};
  border-color: ${colors.classicGreenColor};
`;

export const SocialsList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const SocialsLink = styled.a`
  display: block;
  width: 100%;
  height: 100%;
  color: ${colors.primaryWhiteAlpha};

  &.viber {
    color: ${colors.viberColor};
  }

  &.telegram {
    color: ${colors.telegramColor};
  }

  &.whatsapp {
    color: ${colors.whatsappColor};
  }

  &.instagram {
    color: ${colors.instagramColor};
  }

  &:hover,
  &:focus {
    color: ${colors.primaryBrandColor};
  }
`;
