import { getDbConnection } from "@/lib/db";
import { getUserUploadCount } from "@/lib/summaries";
import { pricingPlans } from "@/utils/constants";
import { User, clerkClient } from "@clerk/nextjs/server";

export async function getPriceIdForActiveUser(email: string) {
  const sql = await getDbConnection();
  const query =
    await sql`SELECT price_id FROM users WHERE email = ${email} AND status = 'active'`;
  return query?.[0]?.price_id || null;
}

export async function hasActivePlan(email: string) {
  const sql = await getDbConnection();
  const query =
    await sql`SELECT price_id, status FROM users WHERE email = ${email} AND status = 'active' AND price_id IS NOT NULL`;

  return query && query.length > 0;
}

export async function hasReachedUploadLimit(userId: string) {
  const uploadCount = await getUserUploadCount(userId);

  const client = await clerkClient();
  const user = await client.users.getUser(userId);
  const priceId = user.emailAddresses[0]?.emailAddress
    ? await getPriceIdForActiveUser(user.emailAddresses[0].emailAddress)
    : null;
  const plan = pricingPlans.find((plan) => plan.priceID === priceId)?.id;
  const uploadLimit = plan === "business" ? 5000 : plan === "pro" ? 1000 : 5;

  return { hasReachedLimit: uploadCount >= uploadLimit, uploadLimit };
}

export async function getSubscriptionStatus(user: User) {
  const hasSubscription = await hasActivePlan(
    user.emailAddresses[0].emailAddress,
  );
  return hasSubscription;
}
