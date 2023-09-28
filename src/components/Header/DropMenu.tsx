"use client";
import {
  DropMenuHeader,
  DropMenuNav,
  MenuButton,
  MenuItem,
  MenuList,
  MobileDropMenu,
} from "./DropMenu.styled";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import pageLogoPath from "images/ring-bus-logo.svg";
import { useState } from "react";
import { navListData } from "./navListData";
import NavLink from "components/Shared/NavLink";

const DropMenu = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleMenu = () => {
    setIsNavOpen((prev) => !prev);
  };

  return (
    <MobileDropMenu>
      <DropMenuHeader>
        <a href="/" aria-label="home page link">
          <Image src={pageLogoPath} alt="page logo" width={150} height={50} />
        </a>
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
          {navListData.map(({ href, text }) => (
            <MenuItem key={href}>
              <NavLink href={href} onClick={toggleMenu}>
                {text}
              </NavLink>
            </MenuItem>
          ))}
        </MenuList>
      </DropMenuNav>
    </MobileDropMenu>
  );
};
export default DropMenu;
