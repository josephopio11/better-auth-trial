import prisma from "@/lib/prisma";
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { admin } from "better-auth/plugins";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  emailAndPassword: {
    enabled: true,
  },
  plugins: [
    admin({
      bannedUserMessage:
        "Your account was banned from logging into this system",
      defaultBanExpiresIn: 60 * 60 * 24 * 7, // 7 days
      defaultBanReason: "Spamming",
      impersonationSessionDuration: 60 * 60 * 24, // 1 day
      adminRoles: ["admin", "superadmin"],
      defaultRole: "user",
    }),
  ],
});
