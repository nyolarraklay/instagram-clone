import {
  DotsHorizontalIcon,
  HeartIcon,
  ChatIcon,
  BookmarkIcon,
  EmojiHappyIcon,
} from "@heroicons/react/outline";

export default function Post({ username, userImage, img, caption }) {
  return (
    <div className="bg-white my-7 border rounded-md">
      <div className="flex items-center p-5">
        <img
          className="rounded-full h-12 border p-1 mr-3 object-cover"
          src={userImage}
          alt={username}
        />
        <p className="font-bold flex-1">{username}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>
      <img className="w-full object-cover" src={img} alt={caption} />
      <div className="flex justify-between px-4">
        <div className="flex space-x-4">
          <HeartIcon className="h-7 hover:scale-125 transition-transform duration-200 ease-out cursor-pointer" />
          <ChatIcon className="h-7 hover:scale-125 transition-transform duration-200 ease-out cursor-pointer" />
        </div>
        <BookmarkIcon className="h-7 hover:scale-125 transition-transform duration-200 ease-out cursor-pointer" />
      </div>
      <p className="p-4 truncate">
        <span className="font-bold mr-2">{username}</span>
        {caption}
      </p>
      <form className="flex items-center p-4">
        <EmojiHappyIcon className="h-7 cursor-pointer" />
        <input
          type="text"
          placeholder="Add a comment..."
          className="flex-1 border-none w-full focus:ring-0 p-4"
        />
        <button className="font-bold text-blue-500">Post</button>
      </form>
    </div>
  );
}
