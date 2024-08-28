import { signOut } from "../api/auth/[...auth]/route.js";
export default function SignOut() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut({ redirectTo: "/signin" });
      }}
    >
      <button type="submit" className="rounded-md p-2 bg-orange-500">
        Sign-out
      </button>
    </form>
  );
}
