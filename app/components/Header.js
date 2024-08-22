import Image from "next/image";
import { SearchIcon } from "@heroicons/react/outline";

export default function Header() {
  return (
    <div className="flex items-center justify-between max-w-6xl">
      <div className="cursor-pointer h-24 w-24 relative hidden lg:inline-grid">
        <div className="">
          <Image
            src="https://thumbs.dreamstime.com/b/print-204012264.jpg"
            alt="Instagram"
            layout="fill"
            className="object-contain"
          />
        </div>
      </div>
      <div className="cursor-pointer h-24 w-10 relative flex lg:hidden">
        <div className="">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/640px-Instagram_logo_2022.svg.png"
            alt="Instagram"
            layout="fill"
            className="object-contain"
          />
        </div>
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

      <h1>Header</h1>
    </div>
  );
}
