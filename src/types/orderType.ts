type OrderTypes = "parcel" | "seat" | string;

export interface Order {
  orderType: OrderTypes;
  origin: string;
  destination: string;
  departingDate: Date;
}
