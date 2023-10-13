import { Hero } from "components/Home/HomeSection.styled";
import FoundList from "components/Order/FoundList/FoundList";
import { ContentWrapper } from "components/Order/FoundList/FoundList.styled";
import OrderForm from "components/Order/OrderForm";

const OrderPage = () => {
  return (
    <Hero>
      <ContentWrapper>
        <OrderForm />
        <FoundList />
      </ContentWrapper>
    </Hero>
  );
};

export default OrderPage;
