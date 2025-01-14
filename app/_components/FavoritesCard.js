import Image from "next/image";
import { FaHeart, FaStar } from "react-icons/fa";

import photo from "@/public/inception.png";

function FavoritesCard({ movie, num }) {
  return (
    <div className="bg-slate-800 rounded-xl shadow-md overflow-hidden mb-6">
      <div className="relative w-full h-48">
        <Image
          src={photo}
          alt={movie.title}
          fill
          className="rounded-t-xl object-cover"
        />
      </div>

      <div className="p-4">
        <h2 className="text-2xl font-bold text-white mb-2">{movie.title}</h2>
        <div className="flex items-center text-yellow-400 mb-2">
          <FaStar className="mr-2" /> {movie.rating}
        </div>
        <p className="text-sm text-gray-400 mb-2">Žanr: {movie.genre}</p>
        <p className="text-sm mb-2">Opis: {movie.description}</p>
        <p className="text-sm">Glumci: {movie.actors}</p>
      </div>

      <button className="w-full py-2 bg-red-600 hover:bg-red-700 transition-all text-center text-sm font-semibold">
        <FaHeart className="inline-block mr-2" /> Remove from Favorites
      </button>
    </div>
  );
}

export default FavoritesCard;
