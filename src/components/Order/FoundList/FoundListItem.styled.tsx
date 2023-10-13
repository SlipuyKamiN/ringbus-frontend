"use client";
import styled from "@emotion/styled";
import { colors, transition } from "styles/common/vars";
import { SearchButton } from "../OrderForm.styled";

export const RouteCard = styled.li`
  text-align: start;
  border-radius: 15px;
  padding: 15px;

  color: ${colors.primaryWhite};
  background-color: ${colors.primaryWhiteAlpha};
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const RouteId = styled.p`
  color: ${colors.primaryWhiteAlpha};
`;

export const CardWarning = styled.span`
  color: ${colors.primaryWhiteAlpha};
  font-size: 15px;
  margin-bottom: 12px;
`;

export const RouteSchedule = styled.table`
  margin-bottom: 20px;
  width: 100%;
`;

export const ScheduleRow = styled.tr`
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export const ScheduleDate = styled.th`
  text-align: end;
`;

export const RouteComfortList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 5px;
  fill: $primary-white;
  @media screen and (min-width: 768px) {
    gap: 10px;
    & svg {
      width: 30px;
    }
  }
`;

export const RouteBottomWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const RoutePrice = styled.p`
  margin-bottom: 10px;
  font-size: 20px;

  span {
    font-weight: 700;
    color: ${colors.primaryBrandColor};
  }
`;

export const SelectRouteBtn = styled(SearchButton)`
  margin: 0;
  width: 150px;

  transition: background-color ${transition.duration},
    fill ${transition.duration}, color ${transition.duration},
    border-color ${transition.duration};

  &:disabled {
    cursor: wait;
    background-color: ${colors.primaryBlackAlpha};
    fill: ${colors.primaryWhiteAlpha};
    color: ${colors.primaryWhiteAlpha};
    border-color: ${colors.primaryWhiteAlpha};
  }
`;
