import Image from "next/image";
import { FaHeart, FaStar } from "react-icons/fa";
import { useState, useOptimistic, startTransition } from "react";
import photo from "@/public/inception.png";

function FavoritesCard({ movie, token, onRemove }) {
  const [data, setData] = useState(movie);

  const [optimisticData, setOptimisticData] = useOptimistic(data);

  async function handleClick() {
    startTransition(() => {
      setOptimisticData(null);
    });

    try {
      const bookmarkID = movie.id;
      const response = await fetch("http://localhost:8080/bookmark", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token.value}`,
        },
        body: JSON.stringify({ bookmarkID }),
      });

      console.log(bookmarkID);

      if (!response.ok) {
        throw new Error("Failed to delete bookmark");
      }

      onRemove(bookmarkID);
    } catch (error) {
      console.error("Error:", error.message);

      setOptimisticData(data);
    }
  }

  if (!optimisticData) return null;

  return (
    <div className="bg-slate-800 rounded-xl shadow-md overflow-hidden mb-6">
      <div className="relative w-full h-48">
        <Image
          src={photo}
          alt={data.title}
          fill
          className="rounded-t-xl object-cover"
        />
      </div>

      <div className="p-4">
        <h2 className="text-2xl font-bold text-white mb-2">{data.title}</h2>
        <div className="flex items-center text-yellow-400 mb-2">
          <FaStar className="mr-2" /> {data.rate}
        </div>
        <p className="text-sm text-gray-400 mb-2">Žanr: {data.genre}</p>
        <p className="text-sm mb-2">Opis: {data.description}</p>
      </div>

      <button
        className="w-full py-2 bg-red-600 hover:bg-red-700 transition-all text-center text-sm font-semibold"
        onClick={handleClick}
      >
        <FaHeart className="inline-block mr-2" /> Remove from Favorites
      </button>
    </div>
  );
}

export default FavoritesCard;
