import SignOut from "./SignOut";
export default function MiniProfile({ userImage, session, username }) {
  return (
    <>
      {session ? (
        <div className="flex items-center justify-between mt-14 ml-10">
          <img
            className="rounded-full border p-[2px] h-12"
            src={userImage}
            alt="Profile pic"
          />
          <div className="flex-1 mx-4">
            <h2 className="font-bold">{username}</h2>
            <h3 className="text-xs text-gray-400">Welcome to Instagram</h3>
          </div>
          <SignOut />
        </div>
      ) : (
        <div>
          <p className="font-bold text-center">Please sign in</p>
        </div>
      )}
    </>
  );
}
