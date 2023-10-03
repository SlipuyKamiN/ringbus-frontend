import Image from "next/image";
import nextJsLogoPath from "../../public/next.svg";
import Container from "components/Shared/Container";

const Home = () => {
  return (
    <section>
      <Container>
        <h1>
          <Image src={nextJsLogoPath} alt="page logo" width={150} />
          RingBus International
        </h1>
      </Container>
    </section>
  );
};

export default Home;
