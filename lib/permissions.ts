import { createAccessControl } from "better-auth/plugins";
import { adminAc, defaultStatements } from "better-auth/plugins/admin/access";

const statement = {
  ...defaultStatements,
  project: ["create", "share", "update", "delete"],
  band: ["create", "share", "update", "delete"],
  booking: ["create", "share", "update", "delete"],
  bandAvailability: ["create", "share", "update", "delete"],
  invitation: ["create", "share", "update", "delete"],
  review: ["create", "share", "update", "delete"],
} as const;

export const ac = createAccessControl(statement);

export const user = ac.newRole({
  band: ["create", "update", "share"],
  booking: ["create", "share", "update", "delete"],
  project: ["create"],
});

export const admin = ac.newRole({
  project: ["create", "share", "update", "delete"],
  booking: ["create", "share", "update", "delete"],
  bandAvailability: ["create", "share", "update", "delete"],
  invitation: ["create", "share", "update", "delete"],
  review: ["create", "share", "update", "delete"],
  band: ["create", "share", "update", "delete"],
  ...adminAc.statements,
});

export const superadmin = ac.newRole({
  project: ["create", "share", "update", "delete"],
  booking: ["create", "share", "update", "delete"],
  bandAvailability: ["create", "share", "update", "delete"],
  invitation: ["create", "share", "update", "delete"],
  review: ["create", "share", "update", "delete"],
  band: ["create", "share", "update", "delete"],
  ...adminAc.statements,
});

export const customerSupport = ac.newRole({
  project: ["create", "share", "update", "delete"],
  band: ["create", "share", "update"],
  booking: ["create", "share", "update", "delete"],
  bandAvailability: ["create", "share", "update", "delete"],
  invitation: ["create", "share", "update", "delete"],
  review: ["update", "delete"],
  user: ["create", "update"],
});

export const bandManager = ac.newRole({
  band: ["create", "share", "update", "delete"],
  bandAvailability: ["create", "share", "update", "delete"],
  invitation: ["create", "share", "update", "delete"],
  booking: ["create", "share", "update", "delete"],
  review: ["create", "share", "update", "delete"],
});

export const bandMember = ac.newRole({
  band: ["share"],
  bandAvailability: ["share"],
  invitation: ["share"],
  booking: ["share"],
  review: ["share"],
});

export const guest = ac.newRole({
  project: ["share"],
  band: ["share"],
  bandAvailability: ["share"],
  invitation: ["share"],
  review: ["share"],
  booking: ["share"],
  user: ["create"],
});
