import React from "react";
import Reveal from "@/components/common/reveal";

const cards = [
  { tag: "1 / 5", title: "The core argument", rotate: -6 },
  { tag: "2 / 5", title: "Key evidence", rotate: 3 },
  { tag: "3 / 5", title: "Method, in brief", rotate: -2, accent: true },
  { tag: "4 / 5", title: "Notable numbers", rotate: 5 },
  { tag: "5 / 5", title: "What it means", rotate: -4 },
];

const DemoSection = () => {
  return (
    <section className="relative w-full bg-[var(--paper)]">
      <div className="py-16 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl mx-auto text-center mb-16">
          <span className="font-doc-mono text-xs tracking-widest uppercase text-[var(--marigold-dark)]">
            The swipe deck
          </span>
          <h3 className="mt-3">
            A 40-page report becomes a five-card deck you can read on a
            coffee break.
          </h3>
        </Reveal>

        {/* Cards scattered like a hand spread on a desk — wraps freely, never scrolls */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-10 sm:gap-x-8">
          {cards.map((card, i) => (
            <Reveal key={card.tag} delay={i * 90}>
              <div
                className="group w-36 sm:w-44 rounded-2xl border border-[var(--border)] bg-[var(--paper-card)] p-5 flex flex-col justify-between shadow-sm transition-all duration-300 hover:-translate-y-2 hover:rotate-0 hover:shadow-lg hover:z-10"
                style={{ transform: `rotate(${card.rotate}deg)` }}
              >
                <span
                  className={`font-doc-mono text-[11px] ${
                    card.accent ? "text-[var(--marigold-dark)]" : "text-[var(--ink-soft)]"
                  }`}
                >
                  {card.tag}
                </span>
                <div className="mt-8 space-y-2">
                  <h4 className="text-sm font-semibold font-sans text-[var(--ink)]">
                    {card.title}
                  </h4>
                  <div className="space-y-1.5">
                    <div className="h-1.5 w-full rounded-full bg-[var(--border)]" />
                    <div className="h-1.5 w-4/5 rounded-full bg-[var(--border)]" />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
