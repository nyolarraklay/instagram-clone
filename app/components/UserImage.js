"use client";

import { useRouter } from "next/navigation";

export default function UserImage({ image }) {
  const router = useRouter(); // Initialize the router

  const handleSignOut = () => {
    router.push("/signOut"); // Perform the redirect
  };

  return (
    <>
      <img
        src={image}
        alt="User Image"
        className="rounded-full cursor-pointer h-10"
        onClick={handleSignOut}
      />
    </>
  );
}
