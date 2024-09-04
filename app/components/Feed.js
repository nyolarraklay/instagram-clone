import MiniProfile from "./MiniProfile";
import Posts from "./Posts";
import Stories from "./Stories";
import Suggestions from "./Suggestions";

export default function Feed({ profilePic, isUser, username }) {
  return (
    <div>
      <main
        className={`grid ${
          isUser
            ? "grid-cols-1 md:grid-cols-3 md:max-w-6xl mx-auto"
            : "grid-cols-1 md:grid-cols-2 md:max-w-3xl mx-auto"
        }`}
      >
        <section className="md:col-span-2">
          {/* Stories */}
          <Stories
            userImage={isUser ? profilePic : null}
            isLoggedIn={isUser ? true : false}
          />
          {/* Posts */}
          <Posts session={isUser} />
        </section>
        {isUser ? (
          <section className="hidden md:inline-grid md:col-span-1">
            <div className="fixed w-[380px]">
              {/* Mini Profile */}
              <MiniProfile
                userImage={profilePic}
                session={isUser}
                username={username}
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
