import { cookies } from "next/headers";

import Header from "@/app/_components/Header";
import MovieDetails from "@/app/_components/MovieDetails";
import SimilarMovies from "@/app/_components/SimilarMovies";
import { handleGetMovie } from "@/app/services/moviesApi";
import Link from "next/link";

async function Page({ params }) {
  const { movieId } = await params;

  const cookieStore = cookies();
  const token = (await cookieStore).get("token");

  const movieRaw = await handleGetMovie(movieId);

  const [movie, simMovies] = await movieRaw.json();

  let backdropURL = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />

      <div
        className="flex-col justify-center items-center w-[80%] mx-auto border mt-[100px] overflow-scroll min-h-screen rounded-xl bg-cover bg-center bg-fixed relative"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgb(0, 0, 0), rgba(0, 0, 0, 0.6)), url('${backdropURL}')`,
        }}
      >
        <MovieDetails movie={movie} token={token} />
        {simMovies.results.length > 0 ? (
          <SimilarMovies simMovies={simMovies.results} />
        ) : (
          <div className="flex flex-col">
            <h1 className="text-white text-5xl italic font-semibold mt-11">
              No movies similar to this one...
            </h1>
            <Link
              href="/"
              className="text-white text-3xl italic font-semibold mt-[100px] underline"
            >
              Click here to browse most popular movies these days...
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Page;
