import prisma from "@/lib/prisma";
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { admin as adminPlugin } from "better-auth/plugins";
import {
  ac,
  admin,
  bandManager,
  bandMember,
  customerSupport,
  superadmin,
  user,
} from "./permissions";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  emailAndPassword: {
    enabled: true,
  },
  plugins: [
    adminPlugin({
      ac,
      roles: {
        admin,
        user,
        superadmin,
        customerSupport,
        bandManager,
        bandMember,
      },
      bannedUserMessage:
        "Your account was banned from logging into this system",
      defaultBanExpiresIn: 60 * 60 * 24 * 7, // 7 days
      defaultBanReason: "Spamming",
      impersonationSessionDuration: 60 * 60 * 24, // 1 day
      adminRoles: ["admin", "superadmin"],
      defaultRole: "user",
    }),
  ],
  trustedOrigins: [
    "http://localhost:3000",
    "http://localhost:3001",
    process.env.BETTER_AUTH_URL!,
    "https://dev.josephopio.com",
    "https://dev2.josephopio.com",
    "https://dev3.josephopio.com",
  ],
});
