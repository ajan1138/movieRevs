import PaginationButton from "./PaginationButton";

function Pagination({ page, settings, search, link, setFavoriti, favoriti }) {
  const {
    currentPage,
    hasNextPage,
    hasPreviousPage,
    nextPage,
    previousPage,
    lastPage,
  } = settings;

  return (
    <div className="flex items-center space-x-2 mt-4 w-[300px] mx-auto">
      {currentPage > 2 && previousPage != 1 && (
        <PaginationButton
          link={link}
          search={search}
          setFavoriti={setFavoriti}
          favoriti={favoriti}
        >
          1
        </PaginationButton>
      )}

      {hasPreviousPage && (
        <PaginationButton
          link={link}
          search={search}
          setFavoriti={setFavoriti}
          favoriti={favoriti}
        >
          {previousPage}
        </PaginationButton>
      )}

      <PaginationButton
        className="bg-blue-500 text-white font-bold"
        search={search}
        currentPage={currentPage}
        link={link}
        setFavoriti={setFavoriti}
        favoriti={favoriti}
      >
        {currentPage}
      </PaginationButton>

      {hasNextPage && (
        <PaginationButton
          link={link}
          search={search}
          setFavoriti={setFavoriti}
          favoriti={favoriti}
        >
          {nextPage}
        </PaginationButton>
      )}

      {lastPage != currentPage && nextPage != lastPage && (
        <PaginationButton
          link={link}
          search={search}
          setFavoriti={setFavoriti}
          favoriti={favoriti}
        >
          {lastPage}
        </PaginationButton>
      )}
    </div>
  );
}

export default Pagination;
