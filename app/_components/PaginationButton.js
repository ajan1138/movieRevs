"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { handleGetBookmarks } from "../services/bookmarksApi";

function PaginationButton({
  children,
  search,
  currentPage,
  link,
  token,
  setFavorites,
}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  async function handleClick() {
    const newSearchParams = new URLSearchParams(searchParams);

    newSearchParams.set("page", children);

    if (search) {
      newSearchParams.set("search", search);
    }

    const url = `${link}?${newSearchParams.toString()}`;

    router.push(url);

    const movies = await handleGetBookmarks(token, children);
    setFavorites(movies);
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
