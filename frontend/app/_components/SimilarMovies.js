import Link from "next/link";
import SuggestedMovie from "./SuggestedMovie";

function SimilarMovies({ simMovies }) {
  return (
    <div className="items-center mt-20 mx-20">
      <p className="logo body text-5xl">Similar Movies</p>
      <div className="py-10 flex flex-row overflow-scroll space-x-5">
        {simMovies.map((movie, i) => {
          return (
            <Link href={`/movie/${movie.id}`} key={i}>
              <SuggestedMovie
                title={movie.title}
                poster_path={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                release_date={movie.release_date}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default SimilarMovies;
