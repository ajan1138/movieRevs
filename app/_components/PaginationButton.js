"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

function PaginationButton({ children, search }) {
  const router = useRouter();

  console.log(search);
  return (
    <Link
      className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300 ease-in-out active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-400"
      href={`/?page=${children}${search ? `&search=${search}` : ""}`}
    >
      {children}
    </Link>
  );
}

export default PaginationButton;
