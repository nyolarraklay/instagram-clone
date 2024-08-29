import SignOut from "./SignOut";
import { auth } from "../api/auth/[...auth]/route.js";
export default async function MiniProfile() {
  const session = await auth();

  return (
    <>
      {session ? (
        <div className="flex items-center justify-between mt-14 ml-10">
          <img
            className="rounded-full border p-[2px] h-12"
            src={session.user.image}
            alt="Profile pic"
          />
          <div className="flex-1 mx-4">
            <h2 className="font-bold">{session.user.username}</h2>
            <h3 className="text-xs text-gray-400">Welcome to Instagram</h3>
          </div>
          <SignOut />
        </div>
      ) : (
        <div>
          <p className="font-bold text-center">Please sign in</p>
        </div>
      )}
    </>
  );
}
