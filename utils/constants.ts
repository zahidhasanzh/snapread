 import type {Variants} from 'motion/react'

import { PriceType } from "@/types";
import { isDev } from "@/utils/helper";

export const pricingPlans: PriceType[] = [
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
    paymentLink: isDev
      ? "https://buy.stripe.com/test_3cI00k5vmet35KH7Bt9ws00" : "",
    priceID:
      process.env.NODE_ENV === "development"
        ? "price_1TxVsSJlEeSDaH8jl1BS2zkZ"
        : "",
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
    paymentLink: isDev
      ? "https://buy.stripe.com/test_cNi5kEbTKet36OL2h99ws01" : "",
    priceID:
      process.env.NODE_ENV === "development"
        ? "price_1TxVsSJlEeSDaH8jLgaFovFq"
        : "",
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
    paymentLink: isDev
      ? "https://buy.stripe.com/test_28E00kga00Cd1urdZR9ws02" : "",
    priceID:
      process.env.NODE_ENV === "development"
        ? "price_1TxVsSJlEeSDaH8jBRuxilW8"
        : "",
  },
];



export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 50,
      duration: 0.8,
    },
  },
};