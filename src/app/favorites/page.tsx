import Container from "components/Shared/Container";
import Link from "next/link";

const FavoritesPage = () => {
  return (
    <section>
      <Container>
        <h1>FavoritesPage Page</h1>
        <Link href="/">Back to home link</Link>
      </Container>
    </section>
  );
};

export default FavoritesPage;
