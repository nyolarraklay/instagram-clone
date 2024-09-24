import {
  DotsHorizontalIcon,
  HeartIcon,
  ChatIcon,
  BookmarkIcon,
  EmojiHappyIcon,
} from "@heroicons/react/outline";
import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  doc,
  orderBy,
  serverTimestamp,
  query,
  onSnapshot,
  setDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../../firebase";
import Moment from "react-moment";

export default function Post({
  username,
  userImage,
  img,
  caption,
  session,
  id,
  uid,
}) {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState([]);
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(
        collection(db, "posts", id, "comments"),
        orderBy("timestamp", "desc")
      ),
      (snapshot) => {
        setComments(snapshot.docs);
      }
    );
  }, [db, id]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "posts", id, "likes"),
      (snapshot) => setLikes(snapshot.docs)
    );
  }, [db]);
  useEffect(() => {
    setHasLiked(likes.findIndex((like) => like.id === uid) !== -1);
  }, [likes]);

  console.log(hasLiked);

  async function likePost() {
    if (hasLiked) {
      await deleteDoc(doc(db, "posts", id, "likes", uid));
    } else {
      await setDoc(doc(db, "posts", id, "likes", uid), {
        username: username,
      });
    }
  }
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
            {hasLiked ? (
              <HeartIconFilled
                onClick={likePost}
                className="text-red-400 btn"
              />
            ) : (
              <HeartIcon className="btn" onClick={likePost} />
            )}

            <ChatIcon className="h-7 hover:scale-125 transition-transform duration-200 ease-out cursor-pointer" />
          </div>
          <BookmarkIcon className="h-7 hover:scale-125 transition-transform duration-200 ease-out cursor-pointer" />
        </div>
      )}

      <p className="p-5 truncate">
        {likes.length > 0 && (
          <p className="font-bold mb-1">{likes.length} likes</p>
        )}
        <span className="font-bold mr-2">{username}</span>
        {caption}
      </p>
      {comments.length > 0 && (
        <div className="mx-10 max-h-24 overflow-y-scroll scrollbar-none">
          {comments.map((comment) => (
            <div
              key={comment.data().id}
              className="flex items-center space-x-2 mb-3"
            >
              <img
                className="h-7 rounded-full object-cover"
                src={comment.data().userImage}
                alt="user image"
              />
              <p className="font-semibold">{comment.data().username}</p>
              <p className="flex-1 truncate">{comment.data().comment}</p>
              <Moment fromNow>{comment.data().timestamp?.toDate()}</Moment>
            </div>
          ))}
        </div>
      )}
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
            className="text-blue-400 font-bold disabled:text-blue-200"
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
