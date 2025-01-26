"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

function PaginationButton({ children, search, currentPage }) {
  const router = useRouter();

  return (
    <Link
      className={`px-6 py-3 font-semibold rounded-lg shadow-md transition-all duration-300 ease-in-out active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
        currentPage
          ? "bg-blue-600 text-white"
          : "bg-gray-300 text-gray-700 hover:bg-blue-700"
      }`}
      href={`/?page=${children}${search ? `&search=${search}` : ""}`}
    >
      {children}
    </Link>
  );
}

export default PaginationButton;
