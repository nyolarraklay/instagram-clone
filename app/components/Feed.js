import MiniProfile from "./MiniProfile";
import Posts from "./Posts";
import Stories from "./Stories";
import Suggestions from "./Suggestions";
import { auth } from "../api/auth/[...auth]/route.js";

export default async function Feed() {
  const session = await auth();
  const userImage = session ? session.user.image : null;
  const userName = session ? session.user.username : null;

  return (
    <div>
      <main
        className={`grid ${
          session
            ? "grid-cols-1 md:grid-cols-3 md:max-w-6xl mx-auto"
            : "grid-cols-1 md:grid-cols-2 md:max-w-3xl mx-auto"
        }`}
      >
        <section className="md:col-span-2">
          {/* Stories */}
          <Stories
            userImage={session ? userImage : null}
            isLoggedIn={session ? true : false}
          />
          {/* Posts */}
          <Posts />
        </section>
        {session ? (
          <section className="hidden md:inline-grid md:col-span-1">
            <div className="fixed w-[380px]">
              {/* Mini Profile */}
              <MiniProfile />
              {/* Suggestions */}
              <Suggestions />
            </div>
          </section>
        ) : null}
      </main>
    </div>
  );
}
