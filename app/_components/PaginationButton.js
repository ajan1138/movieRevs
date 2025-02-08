"use client";

import { useRouter, useSearchParams } from "next/navigation";

function PaginationButton({
  children,
  search,
  currentPage,
  link,
  setFavoriti,
  favoriti,
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const itemsPerPage = 4;

  function handleClick() {
    const newSearchParams = new URLSearchParams(searchParams);

    newSearchParams.set("page", children);

    if (search) {
      newSearchParams.set("search", search);
    }

    router.push(`${link}?${newSearchParams.toString()}`);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedBookmarks = favoriti.slice(startIndex, endIndex);

    setFavoriti(paginatedBookmarks);
  }

  return (
    <button
      className={`px-6 py-3 font-semibold rounded-lg shadow-md transition-all duration-300 ease-in-out active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
        currentPage
          ? "bg-blue-600 text-white"
          : "bg-gray-300 text-gray-700 hover:bg-blue-700"
      }`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

export default PaginationButton;
