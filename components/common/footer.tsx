import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[var(--paper)] border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          <div className="col-span-2 sm:col-span-1">
            <span className="font-display italic text-lg text-[var(--ink)]">
              Snapread
            </span>
            <p className="mt-3 text-sm text-[var(--ink-soft)] max-w-[220px]">
              Turns long documents into visual summaries you can actually
              get through.
            </p>
          </div>

          <div>
            <h4 className="font-doc-mono text-xs uppercase tracking-widest text-[var(--ink-soft)] mb-4">
              Product
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/#how-it-works" className="text-[var(--ink)] hover:text-[var(--marigold-dark)]">How it works</Link></li>
              <li><Link href="/#pricing" className="text-[var(--ink)] hover:text-[var(--marigold-dark)]">Pricing</Link></li>
              <li><Link href="/sign-in" className="text-[var(--ink)] hover:text-[var(--marigold-dark)]">Sign in</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-doc-mono text-xs uppercase tracking-widest text-[var(--ink-soft)] mb-4">
              Company
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="#" className="text-[var(--ink)] hover:text-[var(--marigold-dark)]">About</Link></li>
              <li><Link href="#" className="text-[var(--ink)] hover:text-[var(--marigold-dark)]">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-doc-mono text-xs uppercase tracking-widest text-[var(--ink-soft)] mb-4">
              Legal
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="#" className="text-[var(--ink)] hover:text-[var(--marigold-dark)]">Privacy</Link></li>
              <li><Link href="#" className="text-[var(--ink)] hover:text-[var(--marigold-dark)]">Terms</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[var(--border)] flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="font-doc-mono text-xs text-[var(--ink-soft)]">
            &copy; {new Date().getFullYear()} Snapread. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
