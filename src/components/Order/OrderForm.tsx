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
      <div>
        <h2>Оберіть послугу</h2>
        <ServiceTypeLabel htmlFor="seat">
          <HiddenRadioButton
            type="radio"
            name="service-type"
            value="seat"
            id="seat"
            checked
          />
          <ServiceTypeText>
            <SeatbeltIcon />
            Зайняти місце
          </ServiceTypeText>
        </ServiceTypeLabel>
        <ServiceTypeLabel htmlFor="parcel">
          <HiddenRadioButton
            type="radio"
            name="service-type"
            value="parcel"
            id="parcel"
          />
          <ServiceTypeText>
            <ParcelIcon />
            Відправити посилку
          </ServiceTypeText>
        </ServiceTypeLabel>
      </div>
      <div>
        <Select classNamePrefix="city-select" options={groupedCities} />
        <Select classNamePrefix="city-select" options={groupedCities} />
      </div>
    </Form>
  );
};

export default OrderForm;
