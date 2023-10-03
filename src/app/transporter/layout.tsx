import Container from "components/Shared/Container";
import Link from "next/link";

const TransporterPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      <Container>
        <h1>TransporterPage Page</h1>
        <ul>
          <li>
            <Link href="/">Back to home link</Link>
          </li>
          <li>
            <Link href="/transporter">my-routes</Link>
          </li>
          <li>
            <Link href="/transporter/orders-history">orders-history</Link>
          </li>
          <li>
            <Link href="/transporter/profile">profile</Link>
          </li>
        </ul>

        {children}
      </Container>
    </section>
  );
};

export default TransporterPage;
