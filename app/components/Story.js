import { PlusIcon } from "@heroicons/react/outline";

export default function Story({ img, username, isUser }) {
  return (
    <div className="relative">
      <img
        src={img}
        alt={username}
        className="h-14 rounded-full p-[1.5px] border-red-500 border-2  object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-out"
      />
      {isUser && (
        <PlusIcon className="h-6 w-6 bg-blue-500 text-white rounded-full p-1.5 -mt-6 -ml-6 cursor-pointer absolute right-0" />
      )}
      <p className="text-xs w-14 truncate">{username}</p>
    </div>
  );
}
