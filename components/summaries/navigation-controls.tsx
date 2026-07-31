import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function NavigationControls({
  currentSection,
  totalSections,
  onPrevious,
  onNext,
  onSectionSelect,
}: {
  currentSection: number;
  totalSections: number;
  onPrevious: () => void;
  onNext: () => void;
  onSectionSelect: (index: number) => void;
}) {
  return (
    <div className="absolute bottom-0 left-0 right-0 p-2.5 sm:p-4 bg-[var(--paper-card)]/90 backdrop-blur-xs border-t border-[var(--border)]">
      <div className="flex items-center justify-between gap-1.5 sm:gap-2">
        <Button
          variant={"ghost"}
          size={"icon"}
          onClick={onPrevious}
          disabled={currentSection === 0}
          className={cn(
            "group/nav rounded-full w-9 h-9 sm:w-11 sm:h-11 shrink-0 bg-[var(--ink)] text-[var(--paper-card)] border border-[var(--ink)] hover:bg-[var(--ink)]",
            currentSection === 0 && "opacity-40"
          )}
        >
          <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 transition-colors duration-200 group-hover/nav:text-[var(--marigold)]" />
        </Button>

        <div className="flex gap-1.5 overflow-x-auto themed-scrollbar px-1 py-1.5">
          {Array.from({ length: totalSections }).map((_, index) => (
            <button
              key={index}
              onClick={() => onSectionSelect(index)}
              aria-label={`Go to card ${index + 1}`}
              className={cn(
                "shrink-0 font-doc-mono text-[10px] w-6 h-6 rounded-full border transition-colors duration-300 flex items-center justify-center",
                currentSection === index
                  ? "bg-[var(--marigold)] border-[var(--marigold-dark)] text-[var(--ink)] ring-2 ring-[var(--marigold)]/30"
                  : "border-[var(--border)] text-[var(--ink-soft)] hover:border-[var(--marigold-dark)]/60"
              )}
            >
              {index + 1}
            </button>
          ))}
        </div>

        <Button
          variant={"ghost"}
          size={"icon"}
          onClick={onNext}
          disabled={currentSection === totalSections - 1}
          className={cn(
            "group/nav rounded-full w-9 h-9 sm:w-11 sm:h-11 shrink-0 bg-[var(--ink)] text-[var(--paper-card)] border border-[var(--ink)] hover:bg-[var(--ink)]",
            currentSection === totalSections - 1 && "opacity-40"
          )}
        >
          <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 transition-colors duration-200 group-hover/nav:text-[var(--marigold)]" />
        </Button>
      </div>
    </div>
  );
}