"use client";

import { useRouter } from "next/navigation"; // if using Next.js, otherwise use a relevant hook or function

export default function RedirectSignIn() {
  const router = useRouter(); // Initialize the router

  const handleRedirectSignIn = () => {
    router.push("/logIn"); // Perform the redirect
  };

  return (
    <div>
      <button
        className="text-blue-500 font-bold"
        onClick={handleRedirectSignIn}
      >
        Sign-In
      </button>
    </div>
  );
}
