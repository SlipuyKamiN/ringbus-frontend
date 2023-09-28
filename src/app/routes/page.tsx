import Container from "components/Shared/Container";
import Link from "next/link";

const RoutesPage = () => {
  return (
    <section>
      <Container>
        <h1>RoutesPage Page</h1>
        <Link href="/">Back to home link</Link>
      </Container>
    </section>
  );
};

export default RoutesPage;
