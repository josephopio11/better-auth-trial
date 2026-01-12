import { ComponentExample } from "@/components/component-example";
import { requireAuth } from "@/lib/auth-server";

export default async function Page() {
  const user = await requireAuth();

  console.log(user);
  return <ComponentExample />;
}
