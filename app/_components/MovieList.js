import Link from "next/link";
import Card from "./Card";

function MovieList() {
  return (
    <div className="grid grid-cols-3 gap-12 p-20 place-items-center">
      <Link href="/movie/123">
        <Card />
      </Link>
      <Link href="/movie/123">
        <Card />
      </Link>
      <Link href="/movie/123">
        <Card />
      </Link>
      <Link href="/movie/123">
        <Card />
      </Link>
      <Link href="/movie/123">
        <Card />
      </Link>
      <Link href="/movie/123">
        <Card />
      </Link>
    </div>
  );
}

export default MovieList;
