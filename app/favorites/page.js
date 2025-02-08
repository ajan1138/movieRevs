import Link from "next/link";
import { cookies } from "next/headers";
import Header from "../_components/Header";

import FavoritesListWrapper from "../_components/FavoritesListWrapper";
import LoginRequired from "../_components/LoginRequired";

async function page({ searchParams }) {
  const cookieStore = cookies();
  const token = (await cookieStore).get("token");
  const page = (await searchParams).page || 1;

  if (!token) {
    return <LoginRequired />;
  }

  const bookmarksRaw = await fetch(
    `http://localhost:8080/bookmarks${`?page=${page}`}`,
    {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token.value}`,
      },
    }
  );

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

  const bookmarksJSON = await bookmarksRaw.json();

  return (
    <div>
      <Header />
      <div className="min-h-screen bg-gray-900 text-white p-6">
        <h1 className="text-4xl font-bold text-center mb-6 mt-[100px]">
          My Favorites
        </h1>
        <FavoritesListWrapper
          favorites={bookmarksJSON}
          token={token}
          page={page}
        />
      </div>
    </div>
  );
}

export default page;
