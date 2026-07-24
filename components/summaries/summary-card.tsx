import DeleteButton from "@/components/summaries/delete-button";
import { Card } from "@/components/ui/card";
import { cn, formatFileName } from "@/lib/utils";
import { FileText } from "lucide-react";
import Link from "next/link";
import { formatDistanceToNow } from "date-fns";

const SummaryHeader = ({
  fileUrl,
  title,
  createdAt,
}: {
  fileUrl: string;
  title: string | null;
  createdAt: string;
}) => {
  return (
    <div className="flex items-start gap-3 sm:gap-4">
      <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[var(--paper)] border border-[var(--border)] text-[var(--marigold-dark)] shrink-0">
        <FileText size={18} strokeWidth={1.75} />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-display text-lg xl:text-xl text-[var(--ink)] truncate w-4/5">
          {title || formatFileName(fileUrl)}
        </h3>
        <p className="font-doc-mono text-xs text-[var(--ink-soft)] mt-0.5">
          {formatDistanceToNow(new Date(createdAt), {
            addSuffix: true,
          })}
        </p>
      </div>
    </div>
  );
};

const StatusBadge = ({ status }: { status: string }) => {
  return (
    <span
      className={cn(
        "font-doc-mono px-3 py-1 text-[11px] font-medium rounded-full capitalize",
        status === "completed"
          ? "bg-[color-mix(in_oklch,var(--teal),white_85%)] text-[var(--teal)]"
          : "bg-[color-mix(in_oklch,var(--marigold),white_75%)] text-[var(--marigold-dark)]"
      )}
    >
      {status}
    </span>
  );
};

const SummaryCard = ({ summary }: { summary: any }) => {
  return (
    <div>
      <Card className="relative h-full border border-[var(--border)] hover:border-[var(--marigold-dark)]/60 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
        {/* folded paper corner, like the page has been dog-eared */}
        <div className="absolute top-0 right-0 w-6 h-6 overflow-hidden pointer-events-none z-0">
          <div
            className="absolute top-0 right-0 w-8 h-8 -translate-y-1/2 translate-x-1/2 rotate-45 bg-[var(--paper)]"
            style={{ boxShadow: "-2px 2px 4px rgba(31, 36, 33, 0.18)" }}
          />
        </div>

        <div className="absolute top-2 right-2 z-10">
          <DeleteButton summaryId={summary.id} />
        </div>

        <Link href={`summaries/${summary.id}`} className="block p-4 sm:p-6">
          <div className="flex flex-col gap-4">
            <SummaryHeader
              fileUrl={summary.original_file_url}
              title={summary.title}
              createdAt={summary.created_at}
            />

            <div className="stitched-line" />

            <p className="text-[var(--ink-soft)] line-clamp-2 text-sm sm:text-base">
              {summary.summary_text}
            </p>

            <div className="flex justify-between items-center mt-1">
              <StatusBadge status={summary.status} />
            </div>
          </div>
        </Link>
      </Card>
    </div>
  );
};

export default SummaryCard;