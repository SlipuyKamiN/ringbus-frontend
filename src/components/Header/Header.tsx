import Container from "components/Shared/Container";
import PageLogoIcon from "images/ring-bus-logo.svg";
import {
  HeaderList,
  HeaderWrapper,
  ListItem,
  PageHeader,
} from "./Header.styled";
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
            <PageLogoIcon />
          </Link>
          <HeaderList>
            {navListData.map(({ content, href }) => (
              <ListItem key={href}>
                <NavLink href={href}>{content}</NavLink>
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
