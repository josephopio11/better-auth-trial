"use server";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { cache } from "react";

export const getServerAuthSession = cache(async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return session;
});

export async function getCurrentUser() {
  const session = await getServerAuthSession();
  return session?.user || null;
}

export async function requireAuth(redirectUrl?: string) {
  const user = await getCurrentUser();

  if (!user) {
    redirect(`/sign-in${redirectUrl ? `?callback=${redirectUrl}` : ""}`);
  }

  return user;
}
