import PaginationButton from "./PaginationButton";

function Pagination({ page, settings, search }) {
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
      {page != 1 && previousPage != 1 && (
        <PaginationButton search={search}>1</PaginationButton>
      )}

      {hasPreviousPage && (
        <PaginationButton search={search}>{previousPage}</PaginationButton>
      )}

      <PaginationButton
        className="bg-blue-500 text-white font-bold"
        search={search}
        currentPage={currentPage}
      >
        {currentPage}
      </PaginationButton>

      {hasNextPage && (
        <PaginationButton search={search}>{nextPage}</PaginationButton>
      )}

      {lastPage != currentPage && nextPage != lastPage && (
        <PaginationButton search={search}>{lastPage}</PaginationButton>
      )}
    </div>
  );
}

export default Pagination;
