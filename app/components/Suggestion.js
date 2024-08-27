export default function Suggestion({ img, username, jobTitle }) {
  return (
    <div className="flex justify-between items-center mt-3">
      <img
        src={img}
        alt={username}
        className="h-10 rounded-full p-[1.5px] border-red-500 border-2  object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-out"
      />
      <div className="flex-1 items-center ml-4">
        <p className="text-sm font-semibold">{username}</p>
        <p className="text-xs text-gray-400 w-[180px] truncate">{jobTitle}</p>
      </div>
      <button className="text-blue-400 text-xs font-semibold">Follow</button>
    </div>
  );
}
