import { cookies } from "next/headers";
import { createHmac } from "crypto";

const SESSION_SECRET =
  process.env.SESSION_SECRET || "dev-only-session-secret-change-me";

function sign(payload) {
  const body = Buffer.from(JSON.stringify(payload)).toString("base64url");
  const sig = createHmac("sha256", SESSION_SECRET).update(body).digest("base64url");
  return `${body}.${sig}`;
}

function verify(token) {
  const [body, sig] = String(token).split(".");
  if (!body || !sig) return null;
  const expected = createHmac("sha256", SESSION_SECRET)
    .update(body)
    .digest("base64url");
  if (expected !== sig) return null;
  const session = JSON.parse(Buffer.from(body, "base64url").toString("utf-8"));
  if (session.exp && Date.now() > session.exp) return null;
  return session;
}

export async function getSession() {
  const cookieStore = await cookies();
  const token = cookieStore.get("session")?.value;
  if (!token) return null;
  try {
    return verify(token);
  } catch {
    return null;
  }
}

export async function createSession(user) {
  const cookieStore = await cookies();
  const payload = {
    id: user.id,
    name: user.name,
    role: user.role || "customer",
    exp: Date.now() + 1000 * 60 * 60 * 24 * 7,
  };

  cookieStore.set("session", sign(payload), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
  });
}

export async function destroySession() {
  const cookieStore = await cookies();
  cookieStore.delete("session");
}

export function safeNextPath(raw) {
  if (typeof raw !== "string") return "/";
  if (!raw.startsWith("/") || raw.startsWith("//")) return "/";
  return raw;
}
