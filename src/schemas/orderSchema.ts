import { Order } from "types/orderType";
import * as yup from "yup";

export const orderSchema: yup.ObjectSchema<Order> = yup.object().shape({
  orderType: yup.string<"parcel" | "seat">().required(),
  origin: yup.string().required(),
  destination: yup.string().required(),
  departingDate: yup.number().required(),
});
