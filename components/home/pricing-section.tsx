import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import Reveal from "@/components/common/reveal";

type PriceType = {
  id: string;
  name: string;
  price: number;
  description: string;
  items: string[];
  paymentLink: string;
  priceID: string;
};

const plans: PriceType[] = [
  {
    id: "basic",
    name: "Basic",
    price: 9,
    description: "Perfect for students and casual readers.",
    items: [
      "5 AI summaries per month",
      "Visual PDF summaries",
      "Standard export",
      "Email support",
    ],
    paymentLink: "#",
    priceID: "",
  },
  {
    id: "pro",
    name: "Pro",
    price: 19,
    description: "Best for professionals who summarize PDFs every day.",
    items: [
      "Unlimited AI summaries",
      "Visual & markdown export",
      "Priority processing",
      "Premium templates",
      "Priority support",
    ],
    paymentLink: "#",
    priceID: "",
  },
  {
    id: "business",
    name: "Business",
    price: 49,
    description: "Built for teams and organizations.",
    items: [
      "Everything in Pro",
      "Team collaboration",
      "Shared workspace",
      "Admin dashboard",
      "24/7 Premium support",
      "Early access to new AI features",
    ],
    paymentLink: "#",
    priceID: "",
  },
];

const PricingCard = ({
  id,
  name,
  price,
  description,
  items,
  paymentLink,
}: PriceType) => {
  const isPopular = id === "pro";

  return (
    <div
      className={cn(
        "relative flex h-full flex-col rounded-lg border-2 border-dashed bg-[var(--paper-card)] p-8 pt-10 transition-shadow duration-300",
        "hover:shadow-xl",
        isPopular
          ? "border-[var(--marigold-dark)] shadow-xl lg:scale-105"
          : "border-[var(--border)] shadow-sm hover:border-[var(--marigold-dark)]/60"
      )}
    >
      {/* punch holes, like a library catalog card */}
      <span className="punch-hole left-4 top-4" aria-hidden="true" />
      <span className="punch-hole right-4 top-4" aria-hidden="true" />

      {isPopular && (
        <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full px-4 py-1 font-doc-mono text-xs font-medium text-[var(--paper-card)] bg-[var(--ink)]">
          Most popular
        </span>
      )}

      {/* Plan */}
      <div className="text-center">
        <h3 className="text-xl font-semibold font-sans text-[var(--ink)]">{name}</h3>

        <p className="mt-3 text-sm leading-6 text-[var(--ink-soft)]">
          {description}
        </p>
      </div>

      {/* Price */}
      <div className="mt-8 flex items-end justify-center font-doc-mono">
        <span className="text-4xl font-medium tracking-tight text-[var(--ink)]">
          ${price}
        </span>

        <span className="mb-1 ml-2 text-sm text-[var(--ink-soft)]">
          /month
        </span>
      </div>

      {/* Features */}
      <ul className="mt-8 flex-1 space-y-4">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <CheckCircle
              size={18}
              className="mt-0.5 shrink-0 text-[var(--teal)]"
            />

            <span className="text-sm text-[var(--ink-soft)]">
              {item}
            </span>
          </li>
        ))}
      </ul>

      {/* Button */}
      <Link
        href={paymentLink}
        className={cn(
          "mt-8 flex h-12 w-full items-center justify-center rounded-md font-medium transition-all duration-300",
          isPopular
            ? "bg-[var(--ink)] text-[var(--paper-card)] hover:bg-[var(--ink)]/90"
            : "border border-[var(--border)] text-[var(--ink)] hover:bg-[var(--paper)]"
        )}
      >
        {isPopular ? "Start free trial" : "Get started"}
      </Link>
    </div>
  );
};

const PricingSection = () => {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-[var(--paper)] py-20"
    >
      <div className="container mx-auto max-w-7xl px-6">
        {/* Heading */}
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="font-doc-mono text-xs tracking-widest uppercase text-[var(--marigold-dark)]">
            Pricing
          </span>

          <h2 className="mt-4 text-4xl lg:text-5xl">
            Pick your reading pace
          </h2>

          <p className="mt-5 text-lg text-[var(--ink-soft)]">
            Choose the plan that fits your workflow. Upgrade anytime as your
            reading pile grows.
          </p>
        </Reveal>

        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {plans.map((plan, i) => (
            <Reveal key={plan.id} delay={i * 100}>
              <PricingCard {...plan} />
            </Reveal>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="mt-12 text-center">
          <p className="font-doc-mono text-sm text-[var(--ink-soft)]">
            No hidden fees. Cancel anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;


