import { signIn } from "../api/auth/[...auth]/route.js";

export default function SignIn() {
  return (
    <>
      <form
        action={async () => {
          "use server";
          await signIn("google", { redirectTo: "/" });
        }}
      >
        <button
          type="submit"
          className="font-semibold bg-orange-300 p-2 rounded-md"
        >
          Sign-in
        </button>
      </form>
    </>
  );
}
