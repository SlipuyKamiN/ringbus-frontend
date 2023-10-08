import Select from "react-select";
import { groupedCities } from "./orderData";
import {
  DateSelector,
  ErrMessage,
  Form,
  FormTitle,
  HiddenRadioButton,
  OrderTypeLabel,
  OrderTypeText,
  SearchButton,
  SelectorWrapper,
} from "./OrderForm.styled";
import ParcelIcon from "images/icons/parcel.svg";
import SeatbeltIcon from "images/icons/seatbelt.svg";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { orderSchema } from "schemas/orderSchema";
import { Order } from "types/orderType";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import uk from "date-fns/locale/uk";
import { BsSearch } from "react-icons/bs";
registerLocale("uk", uk);

const initialOrderData = {
  orderType: "seat",
  origin: "",
  destination: "",
  departingDate: new Date(),
};

const OrderForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: initialOrderData,
    resolver: yupResolver(orderSchema),
  });

  const onSubmit = (data: Order) => {
    console.log({ ...data, departingDate: data.departingDate.getTime() });
  };

  return (
    <Form
      autoComplete="off"
      className="order-form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <FormTitle>Оберіть послугу</FormTitle>
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
        <FormTitle>Оберіть маршрут</FormTitle>
        <SelectorWrapper>
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
                placeholder="Місто відправлення"
              />
            )}
            name={"origin"}
          />
          {errors.origin && <ErrMessage>{errors.origin.message}</ErrMessage>}
        </SelectorWrapper>
        <SelectorWrapper>
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
                placeholder="Місто прибуття"
              />
            )}
            name={"destination"}
          />
          {errors.destination && (
            <ErrMessage>{errors.destination.message}</ErrMessage>
          )}
        </SelectorWrapper>
        <SelectorWrapper>
          <label htmlFor="origin">Дата відправлення:</label>
          <Controller
            render={({ field: { value, onChange } }) => (
              <DatePicker
                dateFormat="d MMMM yyyy"
                locale="uk"
                selected={value}
                minDate={new Date()}
                onChange={onChange}
                showTimeSelect={false}
                customInput={<DateSelector />}
                todayButton="Today"
                dropdownMode="select"
                placeholderText="Click to select time"
                shouldCloseOnSelect
              />
            )}
            control={control}
            name="departingDate"
          />
          {errors.departingDate && (
            <ErrMessage>{errors.departingDate.message}</ErrMessage>
          )}
        </SelectorWrapper>
      </div>
      <div>
        <SearchButton type="submit">
          <BsSearch />
          Знайти перевізника
        </SearchButton>
      </div>
    </Form>
  );
};

export default OrderForm;
