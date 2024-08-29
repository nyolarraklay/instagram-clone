"use client";

import { useRouter } from "next/navigation"; // if using Next.js, otherwise use a relevant hook or function

function SignOutButton() {
  const router = useRouter(); // Initialize the router

  const handleSignOut = () => {
    router.push("/signOut"); // Perform the redirect
  };

  return (
    <div>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
}

export default SignOutButton;
