import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { requireAuth } from "@/lib/auth-server";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: { default: "Dashboard", template: "" },
};

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  const user = await requireAuth();

  console.table(user);
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <pre>{JSON.stringify(user, null, 2)}</pre>
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
