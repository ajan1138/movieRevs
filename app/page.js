import Header from "./_components/Header";
import MovieList from "./_components/MovieList";

function Page() {
  return (
    <div>
      <Header />
      <h1 className="text-4xl font-bold font-sans ml-20 animate-slide-fade text-white mt-4 ">
        Top movies nowadayas . . .
      </h1>
      <MovieList />
    </div>
  );
}

export default Page;
