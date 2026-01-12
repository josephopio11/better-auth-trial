import { ComponentExample } from "@/components/component-example";
import { auth } from "@/lib/auth";
import { requireAuth } from "@/lib/auth-server";

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
    <div>
      {/* <Example title="Joseph" /> */}
      <ComponentExample />
    </div>
  );
}
