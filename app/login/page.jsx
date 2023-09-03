"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function page() {
  const router = useRouter();
  const session = useSession();

  if (session.status === "loading") return <p>Loading...</p>;
  if (session.status === "authenticated") return router.push("/");

  return (
    <div>
      <p>Unauthenticated.</p>
      <button onClick={() => signIn("google")}>sign in with google</button>
    </div>
  );
}
