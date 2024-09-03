import { auth } from "./api/auth/[...auth]/route";
import AddPostModal from "./components/AddPostModal";
import ClientRootLayout from "./components/ClientRootLayout";
import Feed from "./components/Feed";
import Header from "./components/Header";

export default async function Home() {
  const session = await auth();
  const username = session?.user?.username;
  const profilePic = session?.user?.image;
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* <Header /> */}
      <ClientRootLayout>
        <Header
          username={username}
          profilePic={profilePic}
          isUser={session && true}
        />
        <AddPostModal username={username} profilePic={profilePic} />
        <Feed
          username={username}
          profilePic={profilePic}
          isUser={session && true}
        />
      </ClientRootLayout>
    </div>
  );
}
