import Container from "components/Shared/Container";
import Link from "next/link";

const MyRoutes = () => {
  return (
    <section>
      <Container>
        <h1>MyRoutes Page</h1>
        <Link href="/">Back to home link</Link>
      </Container>
    </section>
  );
};

export default MyRoutes;
