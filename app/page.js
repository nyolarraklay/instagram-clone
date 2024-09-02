import AddPostModal from "./components/AddPostModal";
import Feed from "./components/Feed";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* <Header /> */}
      <Header />
      <AddPostModal />
      <Feed />
    </div>
  );
}
