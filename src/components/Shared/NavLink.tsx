"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MouseEventHandler } from "react";

const NavLink = ({
  href,
  children,
  className,
  onClick,
  ...props
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: MouseEventHandler;
}) => {
  const pathname = usePathname();
  className = pathname === href ? className + " active" : className;

  return (
    <Link href={href} className={className} onClick={onClick} {...props}>
      {children}
    </Link>
  );
};

export default NavLink;
