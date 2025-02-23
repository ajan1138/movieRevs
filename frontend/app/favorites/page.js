import { cookies } from "next/headers";
import Header from "../_components/Header";

import FavoritesListWrapper from "../_components/FavoritesListWrapper";
import { handleGetBookmarks } from "../services/bookmarksApi";
import LoginRequired from "../_components/LoginRequired";

async function page({ searchParams }) {
  const cookieStore = cookies();
  const token = (await cookieStore).get("token");
  const page = (await searchParams).page || 1;

  if (!token) return <LoginRequired />;

  const bookmarksJSON = await handleGetBookmarks(token, page);

  return (
    <div>
      <Header />
      <div className="min-h-screen bg-gray-900 text-white p-6">
        <h1 className="text-4xl font-bold text-center mb-6 mt-[100px]">
          My Favorites
        </h1>
        <FavoritesListWrapper
          favoriteMovies={bookmarksJSON}
          token={token}
          page={page}
        />
      </div>
    </div>
  );
}

export default page;
