"use client";

import FavoritesCard from "./FavoritesCard";
import Pagination from "./Pagination";

function FavoritesList({ favorites, token, page }) {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <div className="flex flex-wrap justify-center gap-6 w-full max-w-4xl flex-grow">
        {favorites.bookmarks.map((movie, index) => (
          <div key={movie.id} className="w-[calc(50%-12px)]">
            <FavoritesCard movie={movie} token={token} genres={movie.genres} />
          </div>
        ))}
      </div>
      <Pagination
        settings={favorites.paginationSettings}
        link={"/favorites"}
        token={token}
        favoriti={favorites.bookmarks}
        className="mx-auto"
      />
    </div>
  );
}

export default FavoritesList;
