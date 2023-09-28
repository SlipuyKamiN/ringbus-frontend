import Container from "components/Shared/Container";
import pageLogoPath from "images/ring-bus-logo.svg";
import {
  HeaderList,
  HeaderWrapper,
  ListItem,
  PageHeader,
} from "./Header.styled";
import Image from "next/image";
import DropMenu from "./DropMenu";
import { navListData } from "./navListData";
import Link from "next/link";
import NavLink from "components/Shared/NavLink";

const Header = () => {
  return (
    <PageHeader>
      <Container>
        <HeaderWrapper>
          <Link href="/" aria-label="home page link">
            <Image src={pageLogoPath} alt="page logo" width={150} height={50} />
          </Link>
          <HeaderList>
            {navListData.map(({ text, href }) => (
              <ListItem key={href}>
                <NavLink href={href}>{text}</NavLink>
              </ListItem>
            ))}
          </HeaderList>
        </HeaderWrapper>
        <DropMenu />
      </Container>
    </PageHeader>
  );
};

export default Header;
