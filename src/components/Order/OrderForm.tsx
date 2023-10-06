import Select from "react-select";
import { groupedCities } from "./orderData";
import {
  Form,
  HiddenRadioButton,
  OrderTypeLabel,
  OrderTypeText,
} from "./OrderForm.styled";
import ParcelIcon from "images/icons/parcel.svg";
import SeatbeltIcon from "images/icons/seatbelt.svg";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { orderSchema } from "schemas/orderSchema";
import { Order } from "types/orderType";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const initialOrderData = {
  orderType: "seat",
  origin: "",
  destination: "",
  departingDate: new Date().getTime(),
};

const OrderForm = () => {
  const { register, handleSubmit, control } = useForm({
    defaultValues: initialOrderData,
    resolver: yupResolver(orderSchema),
  });

  const onSubmit = (data: Order) => {
    console.log(data);
  };

  console.log("wqe");

  return (
    <Form
      autoComplete="off"
      className="order-form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <h2>Оберіть послугу</h2>
        <OrderTypeLabel>
          <HiddenRadioButton
            {...register("orderType")}
            type="radio"
            value={"seat"}
          />
          <OrderTypeText>
            <SeatbeltIcon />
            Зайняти місце
          </OrderTypeText>
        </OrderTypeLabel>
        <OrderTypeLabel>
          <HiddenRadioButton
            {...register("orderType")}
            type="radio"
            value={"parcel"}
          />
          <OrderTypeText>
            <ParcelIcon />
            Відправити посилку
          </OrderTypeText>
        </OrderTypeLabel>
      </div>
      <div>
        <h2>Оберіть маршрут</h2>
        <div>
          <label htmlFor="origin">Звідки:</label>
          <Controller
            control={control}
            render={({ field: { onChange, name, ref } }) => (
              <Select
                instanceId={"origin"}
                onChange={(value: any) => onChange(value.value)}
                name={name}
                ref={ref}
                classNamePrefix="city-select"
                options={groupedCities}
              />
            )}
            name={"origin"}
          />
        </div>
        <div>
          <label htmlFor="origin">Куди:</label>
          <Controller
            control={control}
            render={({ field: { onChange, name, ref } }) => (
              <Select
                instanceId={"destination"}
                onChange={(value: any) => onChange(value.value)}
                name={name}
                ref={ref}
                classNamePrefix="city-select"
                options={groupedCities}
              />
            )}
            name={"destination"}
          />
        </div>
        <div>
          <label htmlFor="origin">Дата відправлення:</label>
          <Controller
            render={({ field: { value, onChange } }) => (
              <DatePicker
                dateFormat="d MMM yyyy"
                selected={value}
                minDate={new Date()}
                onChange={(date) => onChange(date.getTime())}
                showTimeSelect={false}
                todayButton="Today"
                dropdownMode="select"
                placeholderText="Click to select time"
                shouldCloseOnSelect
              />
            )}
            control={control}
            name="departingDate"
            required
          />
        </div>
        <button type="submit">++</button>
      </div>
    </Form>
  );
};

export default OrderForm;
