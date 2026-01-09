"use server";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";

// create user
export async function createUser() {
  // Need to check for user role before doing this
  const newUser = await auth.api.createUser({
    body: {
      email: "user@example.com", // required
      password: "some-secure-password", // required
      name: "James Smith", // required
      role: "user",
      data: { customField: "customValue" },
    },
  });

  return newUser;
}

export async function listUsers() {
  // need to check user permissions
  const users = await auth.api.listUsers({
    query: {
      searchValue: "some name",
      searchField: "name",
      searchOperator: "contains",
      limit: 100,
      offset: 100,
      sortBy: "name",
      sortDirection: "desc",
      filterField: "email",
      filterValue: "hello@example.com",
      filterOperator: "eq",
    },
    // This endpoint requires session cookies.
    headers: await headers(),
  });

  return users;
}

export async function setUserRole() {
  // need to check user role
  const data = await auth.api.setRole({
    body: {
      userId: "user-id",
      role: "admin", // required
    },
    // This endpoint requires session cookies.
    headers: await headers(),
  });

  return data;
}

export async function setUserPassword() {
  // need to check user role
  const data = await auth.api.setUserPassword({
    body: {
      newPassword: "new-password", // required
      userId: "user-id", // required
    },
    // This endpoint requires session cookies.
    headers: await headers(),
  });

  return data;
}

export async function updateUser() {
  // need to pass in data and also check user role before this is done
  const data = await auth.api.adminUpdateUser({
    body: {
      userId: "user-id", // required
      data: { name: "John Doe" }, // required
    },
    // This endpoint requires session cookies.
    headers: await headers(),
  });

  return data;
}

export async function banUser() {
  // need to pass in user id and reason and expiry
  await auth.api.banUser({
    body: {
      userId: "user-id", // required
      banReason: "Spamming",
      banExpiresIn: 60 * 60 * 24 * 7,
    },
    // This endpoint requires session cookies.
    headers: await headers(),
  });
}

export async function unbanUser() {
  // need to pass in user id
  await auth.api.unbanUser({
    body: {
      userId: "user-id", // required
    },
    // This endpoint requires session cookies.
    headers: await headers(),
  });
}

export async function listUserSessions() {
  // need to check for user and also pass in the user id
  const data = await auth.api.listUserSessions({
    body: {
      userId: "user-id", // required
    },
    // This endpoint requires session cookies.
    headers: await headers(),
  });

  return data;
}

export async function revokeUserSession() {
  const data = await auth.api.revokeUserSession({
    body: {
      sessionToken: "session_token_here", // required
    },
    // This endpoint requires session cookies.
    headers: await headers(),
  });

  return data;
}

export async function revokeAllUserSessions() {
  const data = await auth.api.revokeUserSessions({
    body: {
      userId: "user-id", // required
    },
    // This endpoint requires session cookies.
    headers: await headers(),
  });

  return data;
}

export async function impersonateUser() {
  const data = await auth.api.impersonateUser({
    body: {
      userId: "user-id", // required
    },
    // This endpoint requires session cookies.
    headers: await headers(),
  });

  return data;
}

export async function stopImpersonatingUser() {
  await auth.api.stopImpersonating({
    // This endpoint requires session cookies.
    headers: await headers(),
  });
}

export async function removeUser() {
  const deletedUser = await auth.api.removeUser({
    body: {
      userId: "user-id", // required
    },
    // This endpoint requires session cookies.
    headers: await headers(),
  });

  return deletedUser;
}
