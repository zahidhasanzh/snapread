"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { MotionDiv } from "@/components/common/motion-wrapper";

const MobileNav = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    // deferred to the next tick so the Link's own navigation gets to
    // start first — closing synchronously on click was interrupting it
    setTimeout(() => setOpen(false), 0);
  };

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex items-center justify-center w-9 h-9 rounded-full border border-[var(--border)] bg-[var(--paper-card)] text-[var(--ink)] shrink-0"
      >
        {open ? <X size={18} /> : <Menu size={18} />}
      </button>

      {open && (
        <MotionDiv
          onClick={closeMenu}
          initial={{ opacity: 0, y: -8, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.15, ease: "easeOut" }}
          className="absolute left-0 right-0 top-full mt-2 mx-4 flex flex-col items-start gap-1 rounded-2xl border border-[var(--border)] bg-[var(--paper-card)] p-4 shadow-lg z-30 origin-top"
        >
          {children}
        </MotionDiv>
      )}
    </div>
  );
};

export default MobileNav;