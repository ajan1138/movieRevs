import Link from "next/link";
import Card from "./Card";

async function MovieList() {
  const rawData = await fetch(`http://localhost:8080/`);
  const data = await rawData.json();

  return (
    <div className="grid grid-cols-3 gap-12 p-20 place-items-center">
      <h1 className="text-4xl font-bold font-sans ml-20 animate-slide-fade text-white mt-[100px] block col-span-3">
        Top movies nowadayas . . .
      </h1>
      {data.results.map((movie) => {
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
      })}
    </div>
  );
}

export default MovieList;
