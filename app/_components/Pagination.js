function Pagination() {
  const currentPage = 1;
  const pageNumbers = [1, 2, 3];
  const page = 1;
  const totalPages = pageNumbers.length;

  return (
    <div className="flex items-center space-x-2 mt-4 w-[300px] mx-auto">
      <button
        className={`px-4 py-2 bg-gray-600 text-white rounded-lg ${
          currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={currentPage === 1}
      >
        Previous
      </button>

      {pageNumbers.map((page) => (
        <button
          key={page}
          className={`px-4 py-2 rounded-lg border border-white ${
            currentPage === page
              ? "bg-black text-white"
              : "bg-gray-400 text-gray-800"
          } hover:bg-blue-300`}
        >
          {page}
        </button>
      ))}

      <button
        className={`px-4 py-2 bg-gray-600 text-white rounded-lg ${
          currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
