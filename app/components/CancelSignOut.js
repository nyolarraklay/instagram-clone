"use client";

import { useRouter } from "next/navigation"; // if using Next.js, otherwise use a relevant hook or function

export default function CancelSignOut() {
  const router = useRouter(); // Initialize the router

  const handleCancelSignOut = () => {
    router.push("/"); // Perform the redirect
  };

  return (
    <div>
      <button
        className=" font-bold text-sm border border-black p-2 rounded-md w-20 hover:scale-125 transition-transform duration-200 ease-out"
        onClick={handleCancelSignOut}
      >
        Cancel
      </button>
    </div>
  );
}
