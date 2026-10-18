"use server";

import { redirect } from "next/navigation";
import { createSession, destroySession, safeNextPath } from "@/lib/session";
import { findUser } from "@/lib/users";

export async function signIn(prevState, formData) {
  const phone = String(formData.get("phone") || "");
  const password = String(formData.get("password") || "");
  const next = safeNextPath(formData.get("next"));
  const user = findUser(phone, password);

  if (!user) {
    return { error: "Phone or password is not right." };
  }

  await createSession(user);
  redirect(next);
}

export async function signOut() {
  await destroySession();
  redirect("/");
}
