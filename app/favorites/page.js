import Header from "../_components/Header";
import FavoritesList from "../_components/FavoritesList";
import Link from "next/link";
import { cookies } from "next/headers";

async function page() {
  const cookieStore = cookies();
  const token = (await cookieStore).get("token");

  if (!token) {
    return (
      <div className="flex justify-center items-center text-white min-h-screen">
        <h1 className="block">Please Login to see your bookmarks! </h1>
        <Link href="/login">CLICK HERE!</Link>
      </div>
    );
  }

  const bookmarksRaw = await fetch("http://localhost:8080/bookmarks", {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token.value}`,
    },
  });

  if (!bookmarksRaw.ok) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen">
        <h1 className="text-white text-6xl">
          NO BOOKMARKS YET...add some movie so you can see it here!
        </h1>
        <Link href="/" className="text-blue-300 text-4xl">
          Click here to surf through movies...
        </Link>
      </div>
    );
  }

  const bookmarks = await bookmarksRaw.json();

  return (
    <div>
      <Header />
      <span className="font-bold text-white">FAVORITES</span>
      <div className="min-h-screen bg-gray-900 text-white p-6">
        <h1 className="text-4xl font-bold text-center mb-6 mt-[100px]">
          My Favorites
        </h1>
        <FavoritesList favorites={bookmarks} token={token} />
      </div>
    </div>
  );
}

export default page;
