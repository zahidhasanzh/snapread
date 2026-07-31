"use client";
import { Card } from "@/components/ui/card";
import { useState } from "react";

import { parseSection } from "@/utils/summary-helper";
import { MotionDiv } from "@/components/common/motion-wrapper";
import { NavigationControls } from "@/components/summaries/navigation-controls";
import ProgressBar from "@/components/summaries/progress-bar";
import ContentSection from "@/components/summaries/content-section";

const SectionTitle = ({
  title,
  index,
  total,
}: {
  title: string;
  index: number;
  total: number;
}) => {
  return (
    <div className="flex flex-col gap-3 mb-6 sticky top-0 pt-2 pb-4 bg-[var(--paper-card)] border-b border-[var(--border)] z-10">
      <span className="font-doc-mono text-xs tracking-widest uppercase text-[var(--marigold-dark)] text-center">
        Card {String(index + 1).padStart(2, "0")} of {String(total).padStart(2, "0")}
      </span>
      <div className="font-display text-3xl lg:text-4xl text-[var(--ink)] text-center flex items-center justify-center gap-2">
        {title}
      </div>
    </div>
  );
};

export function SummaryViewer({ summary }: { summary: string }) {
  const [currentSection, setCurrentSection] = useState(0);

  const handleNext = () =>
    setCurrentSection((prev) => Math.min(prev + 1, sections.length - 1));

  const handlePrevious = () =>
    setCurrentSection((prev) => Math.max(prev - 1, 0));

  const sections = summary
    .split("\n#")
    .map((section) => section.trim())
    .filter(Boolean)
    .map(parseSection);

  return (
    <div className="relative w-full xl:w-[600px]">
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-3xl bg-[var(--paper-card)] border border-[var(--border)] rotate-[-4deg] translate-y-2"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-3xl bg-[var(--paper-card)] border border-[var(--border)] rotate-[3deg] translate-y-1"
      />

      <Card className="relative px-2 h-[500px] sm:h-[600px] lg:h-[700px] w-full overflow-hidden bg-[var(--paper-card)] shadow-2xl rounded-3xl border border-[var(--border)]">
        <ProgressBar sections={sections} currentSection={currentSection} />

        <MotionDiv
          key={currentSection}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          exit={{ opacity: 0 }}
          className="h-full overflow-y-auto scrollbar-hide pt-14 sm:pt-20 pb-20 sm:pb-24"
        >
          <div className="px-4 sm:px-6">
            <SectionTitle
              title={sections[currentSection]?.title || ""}
              index={currentSection}
              total={sections.length}
            />
            <ContentSection
              title={sections[currentSection]?.title || ""}
              points={sections[currentSection]?.points || []}
            />
          </div>
        </MotionDiv>

        <NavigationControls
          currentSection={currentSection}
          totalSections={sections.length}
          onPrevious={handlePrevious}
          onNext={handleNext}
          onSectionSelect={setCurrentSection}
        />
      </Card>
    </div>
  );
}