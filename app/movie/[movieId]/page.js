import Header from "@/app/_components/Header";
import MovieDetails from "@/app/_components/MovieDetails";
import SimilarMovies from "@/app/_components/SimilarMovies";

async function Page({ params }) {
  const { movieId } = await params;

  const movieRaw = await fetch(`http://localhost:8080/movies/${movieId}`);

  const [movie, simMovies] = await movieRaw.json();

  let backdropURL = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;
  let posterURL = `https://image.tmdb.org/t/p/original${movie.poster_path}`;

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />

      <div
        className="flex-col justify-center items-center w-[80%] mx-auto border mt-[100px] overflow-scroll min-h-screen rounded-xl bg-cover bg-center bg-fixed relative"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgb(0, 0, 0), rgba(0, 0, 0, 0.6)), url('${backdropURL}')`,
        }}
      >
        <MovieDetails
          genres={movie.genres}
          description={movie.overview}
          title={movie.title}
          poster={posterURL}
          vote={movie.vote_average}
          releaseDate={movie.release_date}
        />
        <SimilarMovies simMovies={simMovies.results} />
      </div>
    </div>
  );
}

export default Page;
