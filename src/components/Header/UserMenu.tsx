"use client";

import { NavListUserItem, SubMenu } from "./UserMenu.styled";
import { FaBus } from "react-icons/fa";
import { userMenuNavData } from "./navListData";
import NavLink from "components/Shared/NavLink";
import { useRouter } from "next/navigation";

const UserMenu = () => {
  const router = useRouter();

  const handleNavigation = (href: string) => {
    router.push(`/user/${href}`);
  };

  console.log(router);

  return (
    <NavListUserItem>
      <NavLink href="/user">
        <FaBus />
        Кабінет перевізника
      </NavLink>
      <SubMenu>
        {userMenuNavData.map(({ content, href }) => (
          <li key={href}>
            <button type="button" onClick={() => handleNavigation(href)}>
              {content}
            </button>
          </li>
        ))}
      </SubMenu>
    </NavListUserItem>
  );
};

export default UserMenu;
