import React from "react";
import { Show, UserButton } from "@clerk/nextjs";
import NavLink from "@/components/common/nav-link";
import PlanBadge from "@/components/common/plan-badge";
import MobileNav from "@/components/common/mobile-nav";


const Header = () => {
  return (
    <nav className="container relative z-20 mx-auto px-4 md:px-8">
      <div className="flex items-center justify-between py-4 sm:py-5 gap-2">
        <NavLink href="/" className="flex items-center gap-2 shrink-0">
          <span className="font-display italic text-lg sm:text-xl md:text-2xl text-[var(--ink)]">
            Snapread
            <span
              aria-hidden="true"
              className="block h-[5px] sm:h-[6px] -mt-1 rounded-full"
              style={{ background: "var(--marigold)", opacity: 0.6 }}
            />
          </span>
        </NavLink>

        {/* Desktop nav (md and up, 768px+) */}
        <div className="hidden md:flex md:items-center md:gap-8 lg:gap-12">
          <NavLink href="/#pricing">Pricing</NavLink>
          <Show when="signed-in">
            <NavLink href="/dashboard">Your Summaries</NavLink>
          </Show>
        </div>

        <div className="hidden md:flex md:items-center">
          <Show when="signed-in">
            <div className="flex gap-2 items-center">
              <NavLink href="/upload">Upload a PDF</NavLink>
              <PlanBadge />
              <UserButton />
            </div>
          </Show>
          <Show when="signed-out">
            <NavLink href="/sign-in">Sign in</NavLink>
          </Show>
        </div>

        {/* Mobile (below 768px): plan badge + avatar always visible, plus hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          <Show when="signed-in">
            <PlanBadge />
            <UserButton />
          </Show>
          <MobileNav>
            <NavLink href="/#pricing" className="w-full py-2 text-base">
              Pricing
            </NavLink>
            <Show when="signed-in">
              <NavLink href="/dashboard" className="w-full py-2 text-base">
                Your Summaries
              </NavLink>
              <NavLink href="/upload" className="w-full py-2 text-base">
                Upload a PDF
              </NavLink>
            </Show>
            <Show when="signed-out">
              <NavLink href="/sign-in" className="w-full py-2 text-base">
                Sign in
              </NavLink>
            </Show>
          </MobileNav>
        </div>
      </div>
    </nav>
  );
};

export default Header;