import React from "react";
import { Button } from "@/components/ui/button";
import NavLink from "./nav-link";

const Header = () => {
  const isLoggedIn = false;
  return (
    <nav className="container relative z-20 flex items-center justify-between py-5 lg:px-8 px-4 mx-auto">
      <div className="flex lg:flex-1">
        <NavLink href="/" className="flex items-center gap-2 shrink-0">
          {/* wordmark: a highlighted underline stands in for the logomark */}
          <span className="font-display italic text-xl lg:text-2xl text-[var(--ink)]">
            Snapread
            <span
              aria-hidden="true"
              className="block h-[6px] -mt-1 rounded-full"
              style={{ background: "var(--marigold)", opacity: 0.6 }}
            />
          </span>
        </NavLink>
      </div>
      <div className="flex lg:justify-center gap-4 lg:gap-12 lg:items-center">
        <NavLink href="/#pricing">Pricing</NavLink>
        <NavLink href="/#how-it-works">How it works</NavLink>
        {isLoggedIn && <NavLink href="/#dashboard">Your Summaries</NavLink>}
      </div>
      <div className="flex lg:justify-end lg:flex-1">
        {isLoggedIn ? (
          <div className="flex gap-2 items-center">
            <NavLink href="/#sign-in">Upload a PDF</NavLink>
            <div>Pro</div>
            <Button>User</Button>
          </div>
        ) : (
          <div>
            <NavLink href="/sign-in">Sign in</NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
