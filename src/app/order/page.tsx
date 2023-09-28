import Container from "components/Shared/Container";
import Link from "next/link";

const OrderPage = () => {
  return (
    <section>
      <Container>
        <h1>OrderPage Page</h1>
        <Link href="/">Back to home link</Link>
      </Container>
    </section>
  );
};

export default OrderPage;
