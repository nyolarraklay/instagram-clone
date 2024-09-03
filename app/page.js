import AddPostModal from "./components/AddPostModal";
import ClientRootLayout from "./components/ClientRootLayout";
import Feed from "./components/Feed";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* <Header /> */}
      <ClientRootLayout>
        <Header />
        <AddPostModal />
        <Feed />
      </ClientRootLayout>
    </div>
  );
}
