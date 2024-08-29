import Image from "next/image";
import { SearchIcon, PlusCircleIcon } from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
import { auth } from "../api/auth/[...auth]/route";
import RedirectSignIn from "./RedirectSignIn";
import UserImage from "./UserImage";

export default async function Header() {
  const session = await auth();

  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50">
      <div className="flex items-center justify-between max-w-6xl mx-4 xl:mx-auto">
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
            className="bg-gray-100 border-gray-500 text-sm focus:ring-black focus:border-black rounded-full pl-10"
          />
        </div>

        <div className="flex items-center space-x-4">
          <HomeIcon className="h-6 text-blue-500 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out " />
          <PlusCircleIcon className="h-6 text-blue-500 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out hidden md:inline-flex" />
          {session ? (
            <UserImage image={session.user.image} />
          ) : (
            <RedirectSignIn />
          )}
        </div>
      </div>
    </div>
  );
}
