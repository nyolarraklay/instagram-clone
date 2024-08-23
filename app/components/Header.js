import Image from "next/image";
import { SearchIcon, PlusCircleIcon } from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";

export default function Header() {
  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50">
      <div className="flex items-center justify-between max-w-6xl mx-4 xl:mx-auto">
        <div className="cursor-pointer h-24 w-24 relative hidden lg:inline-grid">
          <Image
            src="https://thumbs.dreamstime.com/b/print-204012264.jpg"
            alt="Instagram"
            layout="fill"
            className="object-contain"
          />
        </div>
        <div className="cursor-pointer h-24 w-10 relative flex lg:hidden">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/640px-Instagram_logo_2022.svg.png"
            alt="Instagram"
            layout="fill"
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
          <HomeIcon className="h-6 text-blue-500 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out hidden md:inline-flex" />
          <PlusCircleIcon className="h-6 text-blue-500 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out" />

          <Image
            src="https://scontent.fosl1-1.fna.fbcdn.net/v/t39.30808-1/302219098_10159706965767798_5074832581185012703_n.jpg?stp=dst-jpg_s200x200&_nc_cat=102&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=93lnXJ-DetcQ7kNvgFRfIhc&_nc_ht=scontent.fosl1-1.fna&oh=00_AYBHQsyDgU3Yx5MFr7f0fs62r0V1OsAuL4kVT5-FKvCJbw&oe=66CE2AD5"
            alt="Profile pic"
            height={30}
            width={30}
            className="rounded-full cursor-pointer"
          />
          <p className="hidden lg:inline">Username</p>
        </div>
      </div>
    </div>
  );
}
