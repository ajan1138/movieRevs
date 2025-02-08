import Image from "next/image";

import Badge from "./Badge";
import WatchButton from "./WatchButton";
import StarRating from "./StarRating";
import AddButton from "./AddButton";

async function MovieDetails({ movie, token }) {
  const { genres, description, title, poster, vote, releaseDate } = movie;

  const genreNames = genres.map((genre) => {
    return genre.name;
  });

  return (
    <div className="flex flex-row items-center mt-20 mx-20 overflow-hidden ">
      <Image
        className="object-fill h-min max-w-xl rounded-xl shadow-xl dark:shadow-gray-800"
        src={poster}
        alt={`Poster of the movie`}
        height={540}
        width={360}
        priority
      />
      <div className="flex flex-col ml-20 space-y-5">
        <p className="logo body text-6xl">{title}</p>
        <div className="flex flex-row space-x-2">
          {<Badge genres={genres} />}
          <span> • {releaseDate}</span>
        </div>
        <p className="pr-24">{description}</p>
        <div className="flex flex-row space-x-5">
          <WatchButton />
          <AddButton movie={movie} token={token} />
        </div>

        <StarRating vote={vote} />
      </div>
    </div>
  );
}

export default MovieDetails;
