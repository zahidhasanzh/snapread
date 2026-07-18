import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-0 py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 max-w-7xl">
      <div className="flex flex-col">
        <span className="font-doc-mono text-xs tracking-widest uppercase text-[var(--ink-soft)] mb-4 animate-in fade-in slide-in-from-bottom-2 duration-700">
          Doc &rarr; Deck, in seconds
        </span>

        <h1 className="text-left animate-in fade-in slide-in-from-bottom-3 duration-700 delay-100 fill-mode-both">
          Long PDFs,{" "}
          <span className="relative inline-block">
            <span className="relative z-10">highlighted</span>
            <span
              aria-hidden="true"
              className="absolute inset-x-0 bottom-1 -z-0 h-3 animate-sweep"
              style={{ background: "var(--marigold)", opacity: 0.55, animationDelay: "0.5s" }}
            />
          </span>{" "}
          down to what matters.
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-[var(--ink-soft)] max-w-lg animate-in fade-in slide-in-from-bottom-3 duration-700 delay-200 fill-mode-both">
          Snapread reads the document, pulls out the key ideas, and lays
          them out as a swipeable set of visual cards &mdash; built to be skimmed,
          not scrolled.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4 animate-in fade-in slide-in-from-bottom-3 duration-700 delay-300 fill-mode-both">
          <Button className="bg-[var(--ink)] text-[var(--paper-card)] hover:bg-[var(--ink)]/90 rounded-md px-7 py-6 text-base font-medium shadow-none">
            <Link href={"/#pricing"} className="flex gap-2 items-center">
              <span>Try Snapread</span>
              <ArrowRight size={18} />
            </Link>
          </Button>
          <Link
            href="/#how-it-works"
            className="font-doc-mono text-sm text-[var(--ink-soft)] hover:text-[var(--marigold-dark)] transition-colors underline underline-offset-4"
          >
            See how it works
          </Link>
        </div>
      </div>

      {/* Signature visual: a document page shedding highlighter marks that become a fanned stack of summary cards */}
      <div className="relative h-[380px] sm:h-[440px] flex items-center justify-center overflow-hidden">
        <div className="relative w-[170px] sm:w-[250px] rotate-[-6deg] rounded-sm bg-[var(--paper-card)] border border-[var(--border)] shadow-xl p-4 sm:p-5 animate-in fade-in slide-in-from-left-4 duration-700 delay-150 fill-mode-both">
          <div className="space-y-2.5">
            <div className="h-2 w-3/4 rounded-full bg-[var(--border)]" />
            <div
              className="h-2 w-full rounded-full animate-sweep"
              style={{ background: "var(--marigold)", opacity: 0.7, animationDelay: "0.7s" }}
            />
            <div className="h-2 w-5/6 rounded-full bg-[var(--border)]" />
            <div
              className="h-2 w-full rounded-full animate-sweep"
              style={{ background: "var(--marigold)", opacity: 0.7, animationDelay: "0.85s" }}
            />
            <div className="h-2 w-2/3 rounded-full bg-[var(--border)]" />
            <div className="h-2 w-4/5 rounded-full bg-[var(--border)]" />
            <div
              className="h-2 w-full rounded-full animate-sweep"
              style={{ background: "var(--marigold)", opacity: 0.7, animationDelay: "1s" }}
            />
            <div className="h-2 w-3/5 rounded-full bg-[var(--border)]" />
          </div>
          <span className="absolute -bottom-3 -right-3 font-doc-mono text-[10px] px-2 py-1 rounded-full bg-[var(--ink)] text-[var(--paper-card)]">
            12 pages
          </span>
        </div>

        <ArrowRight
          size={22}
          className="mx-4 text-[var(--ink-soft)] hidden sm:block animate-in fade-in duration-700 delay-500 fill-mode-both"
          aria-hidden="true"
        />

        <div className="relative w-[120px] sm:w-[170px] h-[110px] sm:h-[130px]">
          {[
            { rotate: 8, z: 1, tag: "03", delay: "0.65s" },
            { rotate: -3, z: 2, tag: "02", delay: "0.8s" },
            { rotate: 4, z: 3, tag: "01", delay: "0.95s" },
          ].map((card, i) => (
            <div
              key={card.tag}
              className="absolute inset-0 rounded-2xl border border-[var(--border)] bg-[var(--paper-card)] shadow-lg p-4 flex flex-col justify-between animate-deal"
              style={
                {
                  "--deal-rotate": `${card.rotate}deg`,
                  transform: `rotate(${card.rotate}deg) translateY(${i * 6}px)`,
                  zIndex: card.z,
                  animationDelay: card.delay,
                } as React.CSSProperties
              }
            >
              <span className="font-doc-mono text-[10px] text-[var(--marigold-dark)]">
                {card.tag}
              </span>
              <div className="space-y-1.5">
                <div className="h-1.5 w-full rounded-full bg-[var(--border)]" />
                <div className="h-1.5 w-2/3 rounded-full bg-[var(--border)]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
