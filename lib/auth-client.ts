import { adminClient } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";
import {
  ac,
  admin,
  bandManager,
  bandMember,
  customerSupport,
  superadmin,
  user,
} from "./permissions";

export const { signIn, signUp, signOut, useSession } = createAuthClient({
  plugins: [
    adminClient({
      ac,
      roles: {
        superadmin,
        admin,
        customerSupport,
        bandManager,
        bandMember,
        user,
      },
    }),
  ],
});
