import { Suspense } from "react";
import Header from "./Header";
import MovieList from "./MovieList";
import Pagination from "./Pagination";
import Loading from "../loading";

function Hero({ searchParams }) {
  return (
    <div>
      <Header />

      <Suspense fallback={<Loading />}>
        <MovieList searchParams={searchParams} />
      </Suspense>

      <Pagination />
    </div>
  );
}

export default Hero;
