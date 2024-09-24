"use client";

import Header from "../components/Header.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { db } from "../../firebase.js";
import { serverTimestamp, doc, getDoc, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { RecoilRoot } from "recoil";

export default function LogIn() {
  const router = useRouter();
  async function onGoogleClick() {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      const user = auth.currentUser.providerData[0];
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      if (!docSnap.exists()) {
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          userImg: user.photoURL,
          uid: user.uid,
          timestamp: serverTimestamp(),
          username: user.displayName.split(" ").join("").toLocaleLowerCase(),
        });
      }
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <>
      <RecoilRoot>
        <Header />
        <div className="flex flex-col items-center justify-center min-h-screen px-4 space-y-6 bg-gray-50">
          <img className="w-80" src="https://links.papareact.com/ocw" alt="" />
          <p className="italic font-semibold text-gray-400">
            This is not a real app, it is built for educational purposes only.
          </p>
          <button
            onClick={onGoogleClick}
            className="px-5 py-3 text-white bg-blue-500 rounded-full"
          >
            Sign in with Google
          </button>
        </div>
      </RecoilRoot>
    </>
  );
}
