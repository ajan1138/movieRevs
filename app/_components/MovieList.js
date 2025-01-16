import Link from "next/link";
import Card from "./Card";

async function MovieList({ searchParams }) {
  const params = await searchParams;
  let data;

  if (!params.search) {
    const rawData = await fetch(`http://localhost:8080/`);
    data = await rawData.json();
  }

  if (params.search) {
    const rawData = await fetch(
      `http://localhost:8080/search?search=${params.search}`
    );
    data = await rawData.json();
  }

  return (
    <div className="grid grid-cols-3 gap-12 p-20 place-items-center">
      <h1 className="text-4xl font-bold font-sans ml-20 animate-slide-fade text-white mt-[100px] block col-span-3">
        {!params.search
          ? "Top movies nowadayas . . ."
          : `Listing movies for the '${params.search}' search...`}
      </h1>
      {data.results && data.results.length > 0 ? (
        data.results.map((movie) => {
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
    </div>
  );
}

export default MovieList;
