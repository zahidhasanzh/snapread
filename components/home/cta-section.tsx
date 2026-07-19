import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/common/reveal";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="bg-[var(--ink)] py-16 sm:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col items-center space-y-5 text-center">
          {/* pin dot, like a note tacked to a board */}
          <span
            className="w-3 h-3 rounded-full animate-pulse"
            style={{ background: "var(--marigold)" }}
            aria-hidden="true"
          />
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-[var(--paper-card)]">
            Your next PDF doesn&rsquo;t need forty minutes.
          </h2>
          <p className="max-w-xl text-base sm:text-lg text-[color-mix(in_oklch,var(--paper-card),transparent_25%)]">
            Upload it, and read the summary before your coffee gets cold.
          </p>

          <Button className="mt-2 bg-[var(--marigold)] text-[var(--ink)] hover:bg-[var(--marigold-dark)] hover:text-[var(--paper-card)] rounded-md px-7 py-6 text-base font-medium shadow-none transition-colors duration-300">
            <Link href={"#pricing"} className="flex items-center gap-2">
              Get started
              <ArrowRight size={18} />
            </Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
};

export default CTASection;
