"use client";

import MiniProfile from "./MiniProfile";
import Posts from "./Posts";
import Stories from "./Stories";
import Suggestions from "./Suggestions";
import { useRecoilState } from "recoil";
import userState from "../atom/userAtom";

export default function Feed() {
  const [currentUser, setCurrentUser] = useRecoilState(userState);

  return (
    <div>
      <main
        className={`grid ${
          currentUser
            ? "grid-cols-1 md:grid-cols-3 md:max-w-6xl mx-auto"
            : "grid-cols-1 md:grid-cols-2 md:max-w-3xl mx-auto"
        }`}
      >
        <section className="md:col-span-2">
          {/* Stories */}
          <Stories
            userImage={currentUser ? currentUser.userImg : null}
            isLoggedIn={currentUser ? true : false}
          />
          {/* Posts */}
          <Posts
            session={currentUser}
            uId={currentUser ? currentUser.uid : null}
          />
        </section>
        {currentUser ? (
          <section className="hidden md:inline-grid md:col-span-1">
            <div className="fixed w-[380px]">
              {/* Mini Profile */}
              <MiniProfile
                userImage={currentUser.userImg}
                session={currentUser}
                username={currentUser.username}
              />
              {/* Suggestions */}
              <Suggestions />
            </div>
          </section>
        ) : null}
      </main>
    </div>
  );
}
