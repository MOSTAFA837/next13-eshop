"use client";
import { signIn, useSession } from "next-auth/react";

export default function page() {
  const session = useSession();

  if (session.status === "loading") return <p>Loading...</p>;
  if (session.status === "authenticated") return <p>Authenticated.</p>;

  return (
    <div>
      <p>Unauthenticated.</p>
      <button onClick={() => signIn("google")}>sign in with google</button>
    </div>
  );
}
