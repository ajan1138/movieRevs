import Link from "next/link";
import Card from "./Card";
import Pagination from "./Pagination";
import { handleGetMovies } from "../services/moviesApi";

async function MovieList({ searchParams }) {
  const { search, page } = (await searchParams) || {};
  const currentPage = page || 1;

  const data = await handleGetMovies(page, search);

  return (
    <div className="grid grid-cols-3 gap-12 p-20 place-items-center">
      <h1 className="text-4xl font-bold font-sans ml-20 animate-slide-fade text-white mt-[100px] block col-span-3">
        {!search
          ? "Top movies nowadayas . . ."
          : data.data.length > 0
          ? `Listing movies for the '${search}' search...`
          : "No movies found!"}
      </h1>
      {data.data && data.data.length > 0 ? (
        data.data.map((movie) => {
          return (
            <Link href={`/movie/${movie.id}`} key={movie.id}>
              <Card
                title={movie.title}
                slika={movie.poster_path}
                rating={movie.vote_average}
                description={movie.overview}
              />
            </Link>
          );
        })
      ) : (
        <p>No movies found!</p>
      )}
      <div className="col-span-3 flex justify-center items-center mt-8">
        <Pagination
          settings={data.paginationSettings}
          search={search}
          page={currentPage}
          link="/"
        />
      </div>
    </div>
  );
}

export default MovieList;
