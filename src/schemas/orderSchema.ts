import { Order } from "types/orderType";
import * as yup from "yup";

export const orderSchema: yup.ObjectSchema<Order> = yup.object().shape({
  orderType: yup.string<"parcel" | "seat">().required("Оберіть тип замовлення"),
  origin: yup.string().required("Виберіть місто"),
  destination: yup.string().required("Виберіть місто"),
  departingDate: yup.date().required("Оберіть дату поїздки"),
});
