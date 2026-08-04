import EmptySummaryState from "@/components/summaries/empty-summary-state";
import SummaryCard from "@/components/summaries/summary-card";
import { Button } from "@/components/ui/button";
import { getSummaries } from "@/lib/summaries";
import { hasReachedUploadLimit } from "@/lib/user";
import { currentUser } from "@clerk/nextjs/server";
import { ArrowRight, Plus } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

const DashboardPage = async () => {
  const user = await currentUser();
  const userId = user?.id;
  if (!userId) {
    return redirect("/sign-in");
  }

  const { hasReachedLimit, uploadLimit } = await hasReachedUploadLimit(userId);
  const summaries = await getSummaries(userId);
  return (
    <main className="min-h-screen bg-[var(--paper)]">
      <div className="container mx-auto flex flex-col gap-4">
        <div className="px-2 py-12 sm:py-24">
          <div className="flex gap-4 mb-8 justify-between custom-flex-col">
            <div className="flex flex-col gap-2">
              <h1 className="text-4xl font-bold tracking-tight">
                Your
                <span className="relative inline-block">
                  <span className="relative z-10">Summaries</span>
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-1 -z-0 h-3 animate-sweep"
                    style={{
                      background: "var(--marigold)",
                      opacity: 0.55,
                      animationDelay: "0.5s",
                    }}
                  />
                </span>{" "}
              </h1>
              <p className="text-[var(--ink-soft)]">
                Transform your PDF's into concies, actionable insights
              </p>
            </div>

            {!hasReachedLimit && (
              <Button className="px-4 py-4">
                <Link
                  href="/upload"
                  className="flex items-center text-[var(--paper-card)]"
                >
                  <Plus className="w-5 h-5 mr-2" />
                  New Summary
                </Link>
              </Button>
            )}
          </div>
          {hasReachedLimit && (
            <div className="mb-6">
              <div className="relative overflow-hidden bg-[var(--paper-card)] border border-[var(--border)] rounded-lg p-3 pl-4 text-[var(--ink)]">
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-0 h-full w-1"
                  style={{ background: "var(--marigold)" }}
                />
                <p className="text-sm">
                  You've reached the limit of {uploadLimit} uploads on the Basic
                  plan.{" "}
                  <Link
                    href="/#pricing"
                    className="text-[var(--marigold-dark)] underline font-medium underline-offset-4 inline-flex items-center"
                  >
                    Click here to upgrade to Pro{" "}
                    <ArrowRight className="w-4 h-4 inline-block" />{" "}
                  </Link>{" "}
                  for unlimited upload
                </p>
              </div>
            </div>
          )}

          {summaries.length === 0 ? (
            <EmptySummaryState />
          ) : (
            <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 sm:px-0">
              {summaries.map((summary, index) => (
                <SummaryCard key={index} summary={summary} />
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default DashboardPage;
