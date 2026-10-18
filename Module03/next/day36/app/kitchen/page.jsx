
import { redirect } from "next/navigation";
import { getSession } from "@/lib/session";

export default async function KitchenPage() {
  const user = await getSession();

  if (!user) redirect("/signin?next=/kitchen");

  if (user.role !== "staff") {
    return (
      <main className="p-6">
        <h1 className="text-xl font-bold text-red-600">403 - Access Denied</h1>
        <p>Only staff members can access the kitchen view.</p>
      </main>
    );
  }

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Kitchen Dashboard</h1>
      <p>Welcome, Chef {user.name}!</p>
    </main>
  );
}