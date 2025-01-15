import Header from "./Header";
import MovieList from "./MovieList";
import Pagination from "./Pagination";

function Hero({ searchParams }) {
  return (
    <div>
      <Header />

      <MovieList searchParams={searchParams} />
      <Pagination />
    </div>
  );
}

export default Hero;
