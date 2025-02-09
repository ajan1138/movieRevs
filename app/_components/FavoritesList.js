"use client";

import { startTransition, useOptimistic } from "react";
import FavoritesCard from "./FavoritesCard";
import Pagination from "./Pagination";
import { handleDeleteBookmark } from "../services/bookmarksApi";

function FavoritesList({ favorites, token, setFavorites }) {
  const [optimisticMovies, optimisticDelete] = useOptimistic(
    favorites,
    (state, movieId) => {
      return {
        bookmarks: state.bookmarks.filter((movie) => movie.id !== movieId),
      };
    }
  );

  async function handleDelete(movieId) {
    try {
      startTransition(() => {
        optimisticDelete(movieId);
      });
      await handleDeleteBookmark(movieId, token);

      setFavorites(movieId);
    } catch (error) {
      console.error("Failed to delete bookmark:", error);
    }
  }

  return (
    <div className="flex flex-col items-center min-h-screen">
      <div className="flex flex-wrap justify-center gap-6 w-full max-w-4xl flex-grow">
        {optimisticMovies.bookmarks.map((movie, index) => (
          <div key={`${movie.id}-${index}`} className="w-[calc(50%-12px)]">
            <FavoritesCard
              movie={movie}
              token={token}
              genres={movie.genres}
              onDelete={() => handleDelete(movie.id)}
            />
          </div>
        ))}
      </div>
      <Pagination
        settings={optimisticMovies.paginationSettings}
        link={"/favorites"}
        token={token}
        favoriti={optimisticMovies.bookmarks}
        className="mx-auto"
      />
    </div>
  );
}

export default FavoritesList;
