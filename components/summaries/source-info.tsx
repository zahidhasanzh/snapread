import { ExternalLink, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DownloadSummaryButton } from "@/components/summaries/download-summary-button";

const SourceInfo = ({
  fileName,
  originalFileUrl,
  title,
  summaryText,
  createdAt,
}: {
  fileName: string;
  originalFileUrl: string;
  title: string;
  summaryText: string;
  createdAt: string;
}) => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-4 text-sm text-[var(--ink-soft)]">
      <div className="flex items-center justify-center gap-2">
        <FileText className="h-4 w-4 text-[var(--marigold-dark)]" />
        <span>Source: {fileName}</span>
      </div>
      <div className="flex gap-2">
        <Button
          nativeButton={false}
          variant={"ghost"}
          size={"sm"}
          className="h-8 px-3 text-[var(--ink-soft)] hover:text-[var(--marigold-dark)] hover:bg-[var(--paper-card)]"
          render={
            <a
              href={originalFileUrl}
              target="_blank"
              rel="noopener noreferrer"
            />
          }
        >
          <ExternalLink className="h-4 w-4 mr-1" />
          View Original
        </Button>
        <DownloadSummaryButton
          title={title}
          summaryText={summaryText}
          fileName={fileName}
          createdAt={createdAt}
        />
      </div>
    </div>
  );
};

export default SourceInfo;
