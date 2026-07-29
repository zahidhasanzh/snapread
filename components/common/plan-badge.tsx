import { Badge } from "@/components/ui/badge";
import { getPriceIdForActiveUser } from "@/lib/user";
import { cn } from "@/lib/utils";
import { pricingPlans } from "@/utils/constants";
import { currentUser } from "@clerk/nextjs/server";
import { Crown } from "lucide-react";

const PlanBadge = async () => {
  const user = await currentUser();
  if (!user?.id) return null;
  const email = user?.emailAddresses?.[0]?.emailAddress;

  let priceId: string | null = null;
  if (email) {
    priceId = await getPriceIdForActiveUser(email);
  }

  let planName = "Buy a plan";

  const plan = pricingPlans.find((plan) => plan.priceID === priceId);

  if (plan) {
    planName = plan.name;
  }

  return (
    <Badge
      variant={"outline"}
      className={cn(
        "py-3 ml-2 bg-linear-to-r from-amber-100 to-amber-200 border-amber-300 hidden lg:flex flex-row items-center",
        !priceId && "from-red-100 to-red-200 border-red-300",
      )}
    >
      <Crown
        className={cn("w-3 h-3 text-amber-600", !priceId && "text-red-600")}
      />
      {planName}
    </Badge>
  );
};

export default PlanBadge;
