import { Container } from "../Shared/Container.styled";
import {
  FindLink,
  Hero,
  HeroDescription,
  HeroTitle,
  HeroWrapper,
} from "./HomeSection.styled";
import { BsSearch } from "react-icons/bs";

const HomeSection = () => {
  return (
    <Hero>
      <Container>
        <HeroTitle>
          Швидкий спосіб знайти перевізника в будь-яку точку Європи
        </HeroTitle>
        <HeroWrapper>
          <HeroDescription>
            RingBus ↺ - найпростіший і найшвидший сервіс пошуку перевізника для
            поїздки чи відправлення посилок в Україну або за кордон. <br />
            Скорочуємо відстань. Дбаємо про Ваш комфорт..
          </HeroDescription>
          <FindLink href={"/order"}>
            <BsSearch size={42} />
            Знайти перевізника
          </FindLink>
        </HeroWrapper>
      </Container>
    </Hero>
  );
};

export default HomeSection;
