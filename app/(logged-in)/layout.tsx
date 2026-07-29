import UpgradeRequired from "@/components/common/upgrade-required";
import {hasActivePlan } from "@/lib/user";
import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

export const Layout = async ({ children }: { children: React.ReactNode }) => {
  await auth.protect()
  const user = await currentUser();
  if (!user) {
    redirect("/sign-in");
  }

  const hasActiveSubscription = await hasActivePlan(
    user.emailAddresses[0].emailAddress,
  );
  if (!hasActiveSubscription) {
    return <UpgradeRequired />;
  }

  return <>{children}</>;
};

export default Layout;
