import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calendar, ChevronLeft, Clock, Highlighter } from "lucide-react";

const SummaryHeader = ({
  title,
  createdAt,
  readingTime,
}: {
  title: string;
  createdAt: string;
  readingTime: number;
}) => {
  return (
    <div className="flex gap-4 mb-4 justify-between">
      <div className="space-y-5">
        <div className="flex flex-wrap items-center gap-3 sm:gap-4">
          <span className="inline-flex items-center gap-2 font-doc-mono text-xs tracking-widest uppercase text-[var(--marigold-dark)] border border-[var(--border)] bg-[var(--paper-card)] rounded-full px-4 py-1.5">
            <Highlighter size={14} strokeWidth={1.75} />
            AI Summary
          </span>
          <div className="flex items-center gap-2 text-sm text-[var(--ink-soft)]">
            <Calendar className="h-4 w-4 text-[var(--marigold-dark)]" />
            {new Date(createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
          <div className="flex items-center gap-2 text-sm text-[var(--ink-soft)]">
            <Clock className="h-4 w-4 text-[var(--marigold-dark)]" />
            {readingTime} min Read
          </div>
        </div>
        <h1 className="font-display text-2xl lg:text-4xl text-[var(--ink)] lg:tracking-tight">
          {title}
        </h1>
      </div>
      <div className="self-start">
        <Link href={`/dashboard`}>
          <Button
            variant={"link"}
            size="sm"
            className="group flex items-center gap-1 sm:gap-2 rounded-full transition-colors duration-200 border border-[var(--border)] bg-[var(--paper-card)] hover:border-[var(--marigold-dark)]/60 px-2 sm:px-3"
          >
            <ChevronLeft
              className="h-3 w-3 sm:h-4 sm:w-4 text-[var(--marigold-dark)]
            transition-transform group-hover:-translate-x-0.5"
            />
            <span className="text-xs sm:text-sm text-[var(--ink-soft)] font-medium">
              Back <span className="hidden sm:inline">to Dashboard</span>
            </span>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default SummaryHeader;