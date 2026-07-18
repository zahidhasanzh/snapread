import { FileText, Highlighter, LayoutGrid } from "lucide-react";
import React, { ReactNode } from "react";
import Reveal from "@/components/common/reveal";

const HowItWorksSection = () => {
  type Step = {
    icon: ReactNode;
    label: string;
    description: string;
  };
  const steps: Step[] = [
    {
      icon: <FileText size={28} strokeWidth={1.5} />,
      label: "Drop in a PDF",
      description:
        "Any report, paper, or contract. We handle scanned and text-based files alike.",
    },
    {
      icon: <Highlighter size={28} strokeWidth={1.5} />,
      label: "AI marks it up",
      description:
        "Snapread reads the document the way you would — underlining the ideas that carry the most weight.",
    },
    {
      icon: <LayoutGrid size={28} strokeWidth={1.5} />,
      label: "Get your deck",
      description:
        "Highlights are laid out as a clean set of visual cards, ready to skim or share.",
    },
  ];
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-[var(--paper)]"
    >
      <div className="py-16 lg:py-24 max-w-5xl mx-auto px-4 lg:px-12">
        <Reveal className="text-center mb-16">
          <span className="font-doc-mono text-xs tracking-widest uppercase text-[var(--marigold-dark)]">
            How it works
          </span>
          <h3 className="mt-3 max-w-2xl mx-auto">
            From page to page-turner in three steps
          </h3>
        </Reveal>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 max-w-5xl mx-auto">
          {/* stitched trail connecting the steps, like a notebook binding */}
          <Reveal className="hidden md:block absolute top-6 left-[16.5%] right-[16.5%] origin-left">
            <div className="stitched-line" />
          </Reveal>

          {steps.map((step, index) => (
            <Reveal key={step.label} delay={index * 120}>
              <div className="relative flex flex-col items-center text-center gap-4">
                <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-[var(--paper-card)] border border-[var(--border)] text-[var(--marigold-dark)]">
                  {step.icon}
                </div>
                <span className="font-doc-mono text-xs text-[var(--ink-soft)]">
                  Step {index + 1}
                </span>
                <h4 className="text-lg font-semibold font-sans text-[var(--ink)]">
                  {step.label}
                </h4>
                <p className="text-sm text-[var(--ink-soft)] max-w-[220px]">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
