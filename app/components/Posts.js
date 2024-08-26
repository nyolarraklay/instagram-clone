import React from "react";
import Post from "./Post";

export default function Posts() {
  const posts = [
    {
      id: 1,
      username: "NyolOsorio",
      userImage: "https://i.pravatar.cc/150?img=8",
      img: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      caption: "This is a caption",
    },
    {
      id: 2,
      username: "KlayOsorio",
      userImage: "https://i.pravatar.cc/150?img=5",
      img: "https://images.unsplash.com/photo-1724152312974-d4d48b8b36fd?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption: "This is a caption",
    },
    {
      id: 3,
      username: "ArraOsorio",
      userImage: "https://i.pravatar.cc/150?img=23",
      img: "https://images.unsplash.com/photo-1724579243894-6a8c9bbfe88c?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption: "This is a caption",
    },
  ];
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          username={post.username}
          userImage={post.userImage}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}
