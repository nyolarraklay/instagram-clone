import {
  DotsHorizontalIcon,
  HeartIcon,
  ChatIcon,
  BookmarkIcon,
  EmojiHappyIcon,
} from "@heroicons/react/outline";
import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";

export default function Post({
  username,
  userImage,
  img,
  caption,
  session,
  id,
}) {
  const [comment, setComment] = useState("");
  async function sendComment(e) {
    e.preventDefault();
    const commentToSend = comment;
    setComment("");
    await addDoc(collection(db, "posts", id, "comments"), {
      comment: commentToSend,
      username: username,
      userImage: userImage,
      timestamp: serverTimestamp(),
    });
  }
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
      {session && (
        <div className="flex justify-between px-4">
          <div className="flex space-x-4">
            <HeartIcon className="h-7 hover:scale-125 transition-transform duration-200 ease-out cursor-pointer" />
            <ChatIcon className="h-7 hover:scale-125 transition-transform duration-200 ease-out cursor-pointer" />
          </div>
          <BookmarkIcon className="h-7 hover:scale-125 transition-transform duration-200 ease-out cursor-pointer" />
        </div>
      )}

      <p className="p-4 truncate">
        <span className="font-bold mr-2">{username}</span>
        {caption}
      </p>
      {session && (
        <form className="flex items-center p-4">
          <EmojiHappyIcon className="h-7 cursor-pointer" />
          <input
            type="text"
            placeholder="Add a comment..."
            className="flex-1 border-none w-full focus:ring-0 p-4"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button
            type="submit"
            className="font-bold text-blue-500"
            disabled={!comment.trim()}
            onClick={sendComment}
          >
            Post
          </button>
        </form>
      )}
    </div>
  );
}
