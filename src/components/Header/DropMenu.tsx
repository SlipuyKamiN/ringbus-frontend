"use client";
import {
  DropMenuHeader,
  DropMenuNav,
  MenuButton,
  MenuItem,
  MenuList,
  MobileDropMenu,
} from "./DropMenu.styled";
import { GiHamburgerMenu } from "react-icons/gi";
import PageLogoIcon from "images/ring-bus-logo.svg";
import { useState } from "react";
import { navListData } from "./navListData";
import NavLink from "components/Shared/NavLink";
import Link from "next/link";

const DropMenu = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleMenu = () => {
    setIsNavOpen((prev) => !prev);
  };

  return (
    <MobileDropMenu>
      <DropMenuHeader>
        <Link href="/" aria-label="home page link">
          <PageLogoIcon />
        </Link>
        <MenuButton
          type="button"
          onClick={toggleMenu}
          aria-label="open or close drop-menu button"
        >
          <GiHamburgerMenu size={40} />
        </MenuButton>
      </DropMenuHeader>
      <DropMenuNav data-nav className={!isNavOpen ? "is-hidden" : ""}>
        <MenuList className="drop-menu__list">
          {navListData.map(({ href, content }) => (
            <MenuItem key={href}>
              <NavLink href={href} onClick={toggleMenu}>
                {content}
              </NavLink>
            </MenuItem>
          ))}
        </MenuList>
      </DropMenuNav>
    </MobileDropMenu>
  );
};
export default DropMenu;
