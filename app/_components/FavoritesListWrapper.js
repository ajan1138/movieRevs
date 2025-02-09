"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import FavoritesList from "./FavoritesList";
import { useState } from "react";

const queryClient = new QueryClient();

export default function FavoritesListWrapper({ favoriteMovies, token, page }) {
  const [favorites, setFavorites] = useState(favoriteMovies);

  const handleDeleteSuccess = (movieId) => {
    setFavorites((prev) => ({
      ...prev,
      bookmarks: prev.bookmarks.filter((movie) => movie.id !== movieId),
    }));
  };

  return (
    <QueryClientProvider client={queryClient}>
      <FavoritesList
        favorites={favorites}
        token={token}
        page={page}
        setFavorites={handleDeleteSuccess}
      />
    </QueryClientProvider>
  );
}
