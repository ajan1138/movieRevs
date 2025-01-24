"use client";

import { useState } from "react";
import FavoritesCard from "./FavoritesCard";

function FavoritesList({ favorites, token }) {
  const [favoriti, setFavoriti] = useState(favorites);

  const handleRemove = (id) => {
    setFavoriti((prev) => prev.filter((movie) => movie.id !== id));
  };

  return (
    <div className="grid grid-cols-2 w-1/2 mx-auto m-10 gap-6">
      {favoriti.map((movie, index) => (
        <FavoritesCard
          movie={movie}
          key={index}
          token={token}
          onRemove={handleRemove}
        />
      ))}
    </div>
  );
}

export default FavoritesList;
