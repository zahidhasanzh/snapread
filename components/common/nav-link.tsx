"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import React from "react";
import { usePathname } from "next/navigation";

const NavLink = ({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) => {
  const pathName = usePathname();
  const isActive = pathName === href || (href !== '/' && pathName.startsWith(href))

  return (
    <Link
      href={href}
      className={cn(
        "transition-colors text-sm duration-200 text-[var(--ink-soft)] hover:text-[var(--marigold-dark)]",
        className,
        isActive && 'text-[var(--marigold-dark)]'
      )}
    >
      {children}
    </Link>
  );
};

export default NavLink;
