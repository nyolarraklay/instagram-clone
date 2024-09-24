"use client";

import CancelSignOut from "../components/CancelSignOut.js";
import { useRecoilState } from "recoil";
import userState from "../atom/userAtom.js";
import { signOut, getAuth } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function SignOut() {
  const [currentUser, setCurrentUser] = useRecoilState(userState);
  const router = useRouter();
  const auth = getAuth();
  function logOut() {
    signOut(auth).then(() => {
      setCurrentUser(null);

      router.push("/");
    });
  }
  return (
    <div className="flex flex-col items-center justify-center text-center  my-auto h-screen ">
      <div className="space-y-4 border border-red-300 rounded-lg bg-gray-100 p-10">
        <img className="w-80" src="https://links.papareact.com/ocw" alt="" />
        <h5 className="font-bold">Are you sure you want to sign out?</h5>

        <button
          onClick={logOut}
          className="text-white font-bold text-sm bg-blue-500 p-2 rounded-md w-20 hover:scale-125 transition-transform duration-200 ease-out"
        >
          yes
        </button>

        <CancelSignOut />
      </div>
    </div>
  );
}
