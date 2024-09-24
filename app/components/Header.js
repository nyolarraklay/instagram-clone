"use client";

import Image from "next/image";
import { SearchIcon } from "@heroicons/react/outline";
import RedirectSignIn from "./RedirectSignIn";
import UserImage from "./UserImage";
import PlusIconAddIcon from "./PlusIconAddIcon";
import HomeIconButton from "./HomeIcon";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import userState from "../atom/userAtom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db } from "../../firebase";
import { collection, onSnapshot, query, where } from "firebase/firestore";

export default function Header() {
  const [currentUser, setCurrentUser] = useRecoilState(userState);
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.auth.currentUser.providerData[0].uid;

        const unsubscribe = onSnapshot(
          query(collection(db, "users"), where("uid", "==", uid)),
          (snapshot) => {
            const userData = snapshot.docs.map((doc) => doc.data());
            setCurrentUser(userData[0] || null);
          }
        );
        return unsubscribe;
      } else {
        setCurrentUser(null);
      }
    });
  }, [db]);
  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50">
      <div className="flex items-center justify-between max-w-6xl mx-2 xl:mx-auto">
        <div className="cursor-pointer h-24 w-24 relative hidden lg:inline-grid">
          <Image
            src="https://thumbs.dreamstime.com/b/print-204012264.jpg"
            alt="Instagram"
            fill
            className="object-contain"
          />
        </div>
        <div className="cursor-pointer h-24 w-10 relative flex lg:hidden">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/640px-Instagram_logo_2022.svg.png"
            fill
            alt="Instagram"
            className="object-contain"
          />
        </div>
        <div className="relative mt-1">
          <div className="absolute top-2 left-2">
            <SearchIcon className="h-5  text-blue-500" />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-100 border-gray-500 text-sm focus:ring-black focus:border-black rounded-full pl-10 w-52 lg:w-96"
          />
        </div>

        <div className="flex items-center space-x-2">
          <HomeIconButton />

          {currentUser ? (
            <>
              <PlusIconAddIcon />
              <UserImage image={currentUser.userImg} />{" "}
            </>
          ) : (
            <RedirectSignIn />
          )}
        </div>
      </div>
    </div>
  );
}
