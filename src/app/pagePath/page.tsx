import Container from "components/Shared/Container";
import Link from "next/link";

const Page = () => {
  return (
    <section>
      <Container>
        <h1>Pagename</h1>
        <Link href="/">Back to home page link</Link>
      </Container>
    </section>
  );
};

export default Page;
