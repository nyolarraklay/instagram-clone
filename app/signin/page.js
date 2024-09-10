import Header from "../components/Header.js";
import SignIn from "../components/SignIn.js";

export default function signIn() {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen px-4 space-y-6 bg-gray-50">
        <img className="w-80" src="https://links.papareact.com/ocw" alt="" />
        <p className="italic font-semibold text-gray-400">
          This is not a real app, it is built for educational purposes only.
        </p>
        <SignIn />
      </div>
    </>
  );
}
