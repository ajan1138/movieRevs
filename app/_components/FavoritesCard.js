import Image from "next/image";
import { FaHeart, FaStar } from "react-icons/fa";
import { handleDeleteBookmark } from "../services/bookmarksApi";

function FavoritesCard({ movie, token }) {
  const genreNames = movie.genres.map((genreString) => {
    const genre = JSON.parse(genreString);
    return genre.name;
  });

  return (
    <div className="bg-slate-800 rounded-xl shadow-md overflow-hidden mb-6 flex flex-col justify-between">
      <div className="relative w-full h-48">
        <Image
          src={movie.poster}
          alt={movie.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="rounded-t-xl object-cover"
        />
      </div>

      <div className="p-4">
        <h2 className="text-2xl font-bold text-white mb-2">{movie.title}</h2>
        <div className="flex items-center text-yellow-400 mb-2">
          <FaStar className="mr-2" /> {movie.rate.toFixed(1)}
        </div>
        <p className="text-sm text-gray-400 mb-2">
          Genre: {genreNames.join(", ")}
        </p>
        <p className="text-sm mb-2 line-clamp-4">
          Description: {movie.description}
        </p>
      </div>

      <button
        className="w-full py-2 bg-red-600 hover:bg-red-700 transition-all text-center text-sm font-semibold"
        onClick={() => handleDeleteBookmark(movie, token)}
      >
        <FaHeart className="inline-block mr-2" /> Remove from Favorites
      </button>
    </div>
  );
}

export default FavoritesCard;
