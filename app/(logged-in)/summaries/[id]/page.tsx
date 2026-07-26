import SourceInfo from "@/components/summaries/source-info";
import SummaryHeader from "@/components/summaries/summary-header";
import { SummaryViewer } from "@/components/summaries/summary-viewer";
import BgGradient from "@/components/common/bg-gradient";
import { getSummaryById } from "@/lib/summaries";
import { FileText } from "lucide-react";
import { notFound } from "next/navigation";

const SummaryPage = async (props: { params: Promise<{ id: string }> }) => {
  const params = await props.params;
  const id = params.id;
  const summary = await getSummaryById(id);
  if (!summary) {
    notFound();
  }
  const {
    title,
    summary_text,
    file_name,
    word_count,
    original_file_url,
    created_at,
  } = summary;

  const readingTime = Math.ceil((word_count || 0) / 200);

  return (
    <div className="relative isolate min-h-screen bg-[var(--paper)]">
      <BgGradient />
      <div className="container mx-auto flex flex-col gap-4">
        <div className="px-4 sm:px-6 lg:px-8 py-6 sm:py-12 lg:py-24">
          <div className="flex flex-col">
            <SummaryHeader
              title={title}
              createdAt={created_at}
              readingTime={readingTime}
            />

            {file_name && (
              <SourceInfo
                title={title}
                summaryText={summary_text}
                fileName={file_name}
                createdAt={created_at}
                originalFileUrl={original_file_url}
              />
            )}

            <div className="relative mt-4 sm:mt-8 lg:mt-16">
              <div className="relative p-4 sm:p-6 lg:p-8 bg-[var(--paper-card)] rounded-2xl sm:rounded-3xl shadow-xl border border-[var(--border)] transition-shadow duration-300 hover:shadow-2xl max-w-4xl mx-auto">
                <div className="absolute top-2 sm:top-4 right-2 sm:right-4 flex items-center gap-1.5 sm:gap-2 font-doc-mono text-xs sm:text-sm text-[var(--ink-soft)] bg-[var(--paper)] border border-[var(--border)] px-2 sm:px-3 py-1 sm:py-1.5 rounded-full">
                  <FileText className="h-3 w-3 sm:h-4 sm:w-4 text-[var(--marigold-dark)]" />
                  {word_count?.toLocaleString()} words
                </div>

                <div className="relative mt-8 sm:mt-6 flex justify-center">
                  <SummaryViewer summary={summary_text} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryPage;