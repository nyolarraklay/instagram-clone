import { signIn } from "../api/auth/[...auth]/route.js";
import Header from "../components/Header";

export default function SignIn() {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-56 px-14 text-center space-y-4">
        <img className="w-80" src="https://links.papareact.com/ocw" alt="" />
        <p className="italic font-semibold text-gray-400">
          This is not a real app, it is built for educational purposes only.
        </p>
        <form
          action={async () => {
            "use server";
            await signIn("google", { redirectTo: "/" });
          }}
        >
          <button type="submit" className="rounded-md p-2 bg-orange-500">
            Sign-in
          </button>
        </form>
      </div>
    </>
  );
}
