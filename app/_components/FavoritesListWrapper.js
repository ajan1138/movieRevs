"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import FavoritesList from "./FavoritesList";

const queryClient = new QueryClient();

export default function FavoritesListWrapper({ favorites, token, page }) {
  return (
    <QueryClientProvider client={queryClient}>
      <FavoritesList favorites={favorites} token={token} page={page} />
    </QueryClientProvider>
  );
}
