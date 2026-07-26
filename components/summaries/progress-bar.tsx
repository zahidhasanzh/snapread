import { cn } from "@/lib/utils";

export default function ProgressBar({
  sections,
  currentSection,
}: {
  sections: Array<{ title: string; points: string[] }>;
  currentSection: number;
}) {
  return (
    <div className="absolute top-0 left-0 right-0 z-20 bg-[var(--paper-card)]/95 backdrop-blur-xs pt-3 pb-2.5 border-b border-[var(--border)]">
      <div className="px-4 flex gap-1.5 overflow-x-auto themed-scrollbar">
        {sections.map((_, index) => (
          <div
            key={index}
            className={cn(
              "shrink-0 font-doc-mono text-[10px] px-2 py-1 rounded-full border transition-colors duration-300",
              index === currentSection
                ? "bg-[var(--marigold)] border-[var(--marigold-dark)] text-[var(--ink)]"
                : currentSection > index
                ? "border-transparent bg-[var(--paper)] text-[var(--ink-soft)]"
                : "border-[var(--border)] text-[var(--ink-soft)]/50"
            )}
          >
            {String(index + 1).padStart(2, "0")}
          </div>
        ))}
      </div>
    </div>
  );
}