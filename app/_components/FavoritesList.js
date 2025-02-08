"use client";

import { useState } from "react";
import FavoritesCard from "./FavoritesCard";
import Pagination from "./Pagination";

function FavoritesList({ favorites, token, page }) {
  const [favoriti, setFavoriti] = useState(favorites.bookmarks);
  const itemsPerPage = 4;

  const handleRemove = (id) => {
    setFavoriti((prev) => prev.filter((movie) => movie.id !== id));
  };

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedBookmarks = favoriti.slice(startIndex, endIndex);

  return (
    <div className="grid grid-cols-2 w-1/2 mx-auto m-10 gap-6">
      {paginatedBookmarks.map((movie, index) => (
        <FavoritesCard
          movie={movie}
          key={movie.id}
          token={token}
          onRemove={handleRemove}
          genres={movie.genres}
        />
      ))}
      <Pagination
        settings={favorites.paginationSettings}
        link={"/favorites"}
        token={token}
        setFavoriti={setFavoriti}
        favoriti={favorites.bookmarks}
      />
    </div>
  );
}

export default FavoritesList;
