import Image from "next/image";
import nextJsLogoPath from "../../public/next.svg";
import Link from "next/link";
import Container from "components/Shared/Container";

const Home = () => {
  return (
    <section>
      <Container>
        <h1>
          <Image src={nextJsLogoPath} alt="page logo" width={150} />
          Project Template Homepage
        </h1>
        <Link href="pagePath">Next page link</Link>
      </Container>
    </section>
  );
};

export default Home;
