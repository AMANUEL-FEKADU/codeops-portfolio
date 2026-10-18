import { DEMO_USERS } from "@/lib/users";
import SignInForm from "./SignInForm";
import { safeNextPath } from "@/lib/session";

export const metadata = {
  title: "Sign in",
  description: "Sign in to checkout, track orders, or open the kitchen.",
};

export default async function SignInPage({ searchParams }) {
  const params = await searchParams;
  const next = safeNextPath(params?.next);

  return (
    <main className="mx-auto max-w-md px-4 py-12">
      <h1 className="font-serif text-4xl">Sign in</h1>
      <p className="mt-2 text-[#5c4638]">
        Sessions live in an httpOnly cookie. After sign-in you return to{" "}
        <code>{next}</code>.
      </p>
      <SignInForm next={next} />
      {/* <div className="mt-8 rounded-2xl bg-white p-4 text-sm ring-1 ring-amber-900/10">
        <p className="font-medium">Demo accounts</p>
        <ul className="mt-2 space-y-1 text-[#5c4638]">
          {DEMO_USERS.map((user) => (
            <li key={user.id}>
              {user.role}: {user.phone} / {user.password}
            </li>
          ))}
        </ul>
      </div> */}
    </main>
  );
}
