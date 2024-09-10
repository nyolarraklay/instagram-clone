import { signOut } from "../api/auth/[...auth]/route.js";
import CancelSignOut from "../components/CancelSignOut.js";

export default function SignOut() {
  return (
    <div className="flex flex-col items-center justify-center text-center  my-auto h-screen ">
      <div className="space-y-4 border border-red-300 rounded-lg bg-gray-100 p-10">
        <img className="w-80" src="https://links.papareact.com/ocw" alt="" />
        <h5 className="font-bold">Are you sure you want to sign out?</h5>

        <form
          action={async () => {
            "use server";
            await signOut({ redirectTo: "/logIn" });
          }}
        >
          <button
            type="submit"
            className="text-white font-bold text-sm bg-blue-500 p-2 rounded-md w-20 hover:scale-125 transition-transform duration-200 ease-out"
          >
            yes
          </button>
        </form>
        <CancelSignOut />
      </div>
    </div>
  );
}
