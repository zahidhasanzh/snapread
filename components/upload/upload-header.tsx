import { Highlighter } from "lucide-react";

const UploadHeader = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 text-center">
      <span className="inline-flex items-center gap-2 font-doc-mono text-xs tracking-widest uppercase text-[var(--marigold-dark)] border border-[var(--border)] bg-[var(--paper-card)] rounded-full px-4 py-1.5">
        <Highlighter size={14} strokeWidth={1.75} />
        AI-powered summaries
      </span>

      <h1 className="text-3xl sm:text-4xl lg:text-5xl">
        Start uploading{" "}
        <span className="relative inline-block">
          <span className="relative z-10">your PDFs</span>
          <span
            aria-hidden="true"
            className="absolute inset-x-0 bottom-1 -z-0 h-3"
            style={{ background: "var(--marigold)", opacity: 0.55 }}
          />
        </span>
      </h1>

      <p className="text-base sm:text-lg text-[var(--ink-soft)] max-w-xl">
        Drop in any report, paper, or contract — Snapread reads it and
        hands you back a swipeable set of visual summary cards.
      </p>
    </div>
  );
};

export default UploadHeader;
