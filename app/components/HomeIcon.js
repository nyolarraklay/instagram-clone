"use client";

import { useRouter } from "next/navigation"; // if using Next.js, otherwise use a relevant hook or function
import { HomeIcon } from "@heroicons/react/solid";

export default function HomeIconButton() {
  const router = useRouter(); // Initialize the router

  const handleRedirectHome = () => {
    router.push("/"); // Perform the redirect
  };

  return (
    <>
      <HomeIcon
        className="h-6 text-blue-500 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out "
        onClick={handleRedirectHome}
      />
    </>
  );
}
