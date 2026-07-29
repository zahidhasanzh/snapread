import { ArrowRight, Highlighter } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const UpgradeRequired = () => {
  return (
    <div className="relative min-h-[50vh] bg-[var(--paper)]">
      <div className="container px-6 sm:px-8 py-16">
        <div className="flex flex-col items-center justify-center gap-6 sm:gap-8 text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 font-doc-mono text-xs tracking-widest uppercase text-[var(--marigold-dark)] border border-[var(--border)] bg-[var(--paper-card)] rounded-full px-4 py-1.5">
            <Highlighter size={14} strokeWidth={1.75} />
            Premium Feature
          </span>

          <h1 className="font-display text-3xl sm:text-4xl text-[var(--ink)]">
            Subscription{" "}
            <span className="relative inline-block">
              <span className="relative z-10">required</span>
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-1 -z-0 h-3"
                style={{ background: "var(--marigold)", opacity: 0.55 }}
              />
            </span>
          </h1>

          <p className="text-base sm:text-lg leading-7 sm:leading-8 text-[var(--ink-soft)] border-2 border-dashed border-[var(--border)] bg-[var(--paper-card)] rounded-2xl p-5 sm:p-6 max-w-xl">
            You need to upgrade to the Basic, Pro, or Business plan to access
            this feature.
          </p>

          <Button
            render={<Link href="/#pricing" />}
            className="bg-[var(--ink)] text-[var(--paper-card)] hover:bg-[var(--ink)]/90 rounded-md px-6 py-5 text-base font-medium shadow-none"
          >
            View Pricing Plans
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UpgradeRequired;
