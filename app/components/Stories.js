"use client";

import minifaker from "minifaker";
import "minifaker/locales/en";
import { useEffect, useState } from "react";
import Story from "./Story";

export default function Stories() {
  const [stories, setStories] = useState([]);
  useEffect(() => {
    const storyUsers = minifaker.array(20, (i) => ({
      username: minifaker.username({ locale: "en" }).toLowerCase(),
      img: `https://i.pravatar.cc/150?${Math.ceil(Math.random() * 70)}`,
      id: i,
    }));
    setStories(storyUsers);
  }, []);

  return (
    <div>
      {stories.map((user) => (
        <Story key={user.id} username={user.username} img={user.img} />
      ))}
    </div>
  );
}
