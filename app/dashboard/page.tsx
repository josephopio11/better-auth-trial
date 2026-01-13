import DashboardHeader from "@/components/dash-header";
import { auth } from "@/lib/auth";
import { requireAuth } from "@/lib/auth-server";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default async function DashboardPage() {
  const user = await requireAuth();
  const result = await auth.api.userHasPermission({
    body: {
      userId: user.id,
      permissions: {
        project: ["share"],
      },
    },
  });

  console.log(result);

  return (
    <>
      <DashboardHeader />
      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <div className="bg-muted/50 aspect-video rounded-xl" />
          <div className="bg-muted/50 aspect-video rounded-xl" />
          <div className="bg-muted/50 aspect-video rounded-xl" />
        </div>
        <div className="bg-muted/50 min-h-screen flex-1 rounded-xl md:min-h-min" />
      </div>
    </>
  );
}
