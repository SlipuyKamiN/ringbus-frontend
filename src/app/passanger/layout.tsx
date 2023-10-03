import Container from "components/Shared/Container";
import Link from "next/link";

const PassangerPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      <Container>
        <h1>PassangerPage Page</h1>
        <ul>
          <li>
            <Link href="/">Back to home link</Link>
          </li>
          <li>
            <Link href="/passanger">favorites</Link>
          </li>
          <li>
            <Link href="/passanger/orders-history">orders-history</Link>
          </li>
          <li>
            <Link href="/passanger/profile">profile</Link>
          </li>
        </ul>
        {children}
      </Container>
    </section>
  );
};

export default PassangerPage;
