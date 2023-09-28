import Container from "components/Shared/Container";
import Link from "next/link";

const UserPage = () => {
  return (
    <section>
      <Container>
        <h1>UserPage Page</h1>
        <Link href="/">Back to home link</Link>
      </Container>
    </section>
  );
};

export default UserPage;
