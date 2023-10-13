import { BsBatteryCharging } from "react-icons/bs";
import {
  CardWarning,
  RouteBottomWrapper,
  RouteCard,
  RouteComfortList,
  RouteId,
  RoutePrice,
  RouteSchedule,
  ScheduleDate,
  ScheduleRow,
  SelectRouteBtn,
} from "./FoundListItem.styled";
import { BiWifi } from "react-icons/bi";
import { FaBed } from "react-icons/fa6";
import { PiTelevision } from "react-icons/pi";
import { MdOutlineReadMore } from "react-icons/md";

const FoundListItem = () => {
  return (
    <RouteCard>
      <RouteId>ID#5899</RouteId>
      <RouteSchedule>
        <CardWarning>
          Зверніть увагу, що час прибуття може не співпадати, час подорожі
          залежить від завантаженості доріг, погодних умов та ситуації на
          кордоні.
        </CardWarning>
        <thead>
          <ScheduleRow>
            <ScheduleDate>departTime</ScheduleDate>
            <ScheduleDate>arriveTime</ScheduleDate>
          </ScheduleRow>
        </thead>
        <tbody>
          <ScheduleRow className="schedule__row">
            <td>origin</td>
            <td>destination</td>
          </ScheduleRow>
        </tbody>
      </RouteSchedule>
      <RouteBottomWrapper>
        <RouteComfortList>
          <li>
            <BiWifi size={30} />
          </li>
          <li>
            <BsBatteryCharging size={30} />
          </li>
          <li>
            <FaBed size={30} />
          </li>
          <li>
            <PiTelevision size={30} />
          </li>
        </RouteComfortList>
        <div>
          <RoutePrice>
            від <span>25 EUR</span>
          </RoutePrice>
          <SelectRouteBtn type="button">
            Замовити <MdOutlineReadMore size={30} />
          </SelectRouteBtn>
        </div>
      </RouteBottomWrapper>
    </RouteCard>
  );
};

export default FoundListItem;
