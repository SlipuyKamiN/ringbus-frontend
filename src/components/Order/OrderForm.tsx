import Select from "react-select";
import { groupedCities } from "./orderData";
import {
  Form,
  HiddenRadioButton,
  ServiceTypeLabel,
  ServiceTypeText,
} from "./OrderForm.styled";
import ParcelIcon from "images/icons/parcel.svg";
import SeatbeltIcon from "images/icons/seatbelt.svg";

const OrderForm = () => {
  return (
    <Form autoComplete="off" className="order-form">
      <div className="route-form__service">
        <h2 className="route-form__title">Оберіть послугу</h2>
        <ServiceTypeLabel htmlFor="seat" className="route-form__service-type">
          <HiddenRadioButton
            type="radio"
            name="service-type"
            value="seat"
            id="seat"
            checked
            className="visually-hidden"
          />
          <ServiceTypeText className="route-form__service-type-wrapper">
            <SeatbeltIcon />
            Зайняти місце
          </ServiceTypeText>
        </ServiceTypeLabel>
        <ServiceTypeLabel htmlFor="parcel" className="route-form__service-type">
          <HiddenRadioButton
            type="radio"
            name="service-type"
            value="parcel"
            id="parcel"
            className="visually-hidden"
          />
          <ServiceTypeText className="route-form__service-type-wrapper">
            <ParcelIcon />
            Відправити посилку
          </ServiceTypeText>
        </ServiceTypeLabel>
      </div>
      <div>
        <Select classNamePrefix={"city-select"} options={groupedCities} />
        <Select classNamePrefix={"city-select"} options={groupedCities} />
      </div>
    </Form>
  );
};

export default OrderForm;
