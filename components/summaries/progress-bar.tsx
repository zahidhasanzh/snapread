export default function ProgressBar({
  sections,
  currentSection,
}: {
  sections: Array<{ title: string; points: string[] }>;
  currentSection: number;
}) {
  const percent = ((currentSection + 1) / sections.length) * 100;

  return (
    <div className="absolute top-0 left-0 right-0 z-20 bg-[var(--paper-card)]/95 backdrop-blur-xs px-6 pt-4 pb-3 border-b border-[var(--border)]">
      <div className="h-1.5 rounded-full bg-[var(--border)] overflow-hidden">
        <div
          className="h-full rounded-full bg-[var(--marigold)] transition-all duration-500 ease-out"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}