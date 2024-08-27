"use client";

import minifaker from "minifaker";
import "minifaker/locales/en";
import { useEffect, useState } from "react";
import Suggestion from "./Suggestion";

export default function Suggestions() {
  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    const storySuggestion = minifaker.array(5, (i) => ({
      username: minifaker.username({ locale: "en" }).toLowerCase(),
      img: `https://i.pravatar.cc/150?${Math.ceil(Math.random() * 70)}`,
      id: i,
      jobTitle: minifaker.jobTitle(),
    }));
    setSuggestions(storySuggestion);
  }, []);

  return (
    <div className="mt-4 ml-10">
      <div className="flex items-center justify-between text-sm mb-5">
        <h3 className="font-bold text-gray-400">Suggestions For You</h3>
        <button className="text-gray-600 font-semibold">See All</button>
      </div>
      <div>
        {suggestions.map((user) => (
          <Suggestion
            key={user.id}
            username={user.username}
            img={user.img}
            jobTitle={user.jobTitle}
          />
        ))}
      </div>
    </div>
  );
}
