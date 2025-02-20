import Image from "next/image";

import { FaStar } from "react-icons/fa";
import photoNotFound from "@/public/no-posterMovie-found.png";

function Card({ title, rating, zanr, description, actors, slika }) {
  const photo = slika
    ? `https://image.tmdb.org/t/p/original${slika}`
    : photoNotFound;

  return (
    <div className="h-72 flex w-full rounded-xl border border-black">
      <div className="w-2/5 bg-slate-300 object-cover rounded-l-xl relative aspect-square">
        <Image
          src={photo}
          alt={`slika role ${slika}`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>
      <div className="w-3/5 bg-slate-500 flex flex-col rounded-r-xl p-4 text-white shadow-lg space-y-3">
        <h1 className="font-bold text-3xl line-clamp-3">{title}</h1>
        <div className="flex items-center space-x-2 text-lg">
          <span className="font-semibold">RATING:</span>
          <span className="text-yellow-400 flex items-center">
            <FaStar /> {rating != "0.0" ? rating.toFixed(1) : "Unknown rating"}
          </span>
        </div>

        <p className="text-base line-clamp-4">
          <span className="font-semibold li">Opis:</span> {description}
        </p>
      </div>
    </div>
  );
}

export default Card;
