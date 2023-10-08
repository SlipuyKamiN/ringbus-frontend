"use client";

import { Hero } from "components/Home/HomeSection.styled";
import OrderForm from "components/Order/OrderForm";
import Container from "components/Shared/Container";

const OrderPage = () => {
  return (
    <Hero>
      <Container>
        <OrderForm />
      </Container>
    </Hero>
  );
};

export default OrderPage;
