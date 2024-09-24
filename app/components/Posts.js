"use client";

import Post from "./Post";
import { orderBy, query, collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";
import { useEffect, useState } from "react";

export default function Posts({ session, uId }) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, "posts"), orderBy("timestamp", "desc")),
      (snapshot) => {
        setPosts(snapshot.docs);
      }
    );
    return unsubscribe;
  }, [db]);

  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.data().username}
          userImage={post.data().profilePic}
          img={post.data().image}
          caption={post.data().caption}
          session={session}
          uid={uId}
        />
      ))}
    </div>
  );
}
