import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { BsBookmarkPlus } from "react-icons/bs";

import Logo from "./Logo";

function Header() {
  return (
    <div className="w-full bg-slate-950  h-20 bg-transparent flex justify-center items-center">
      <div className=""></div>
      <Logo />

      <input
        className=" w-1/2 p-2 border rounded-l-xl border-gray-600 border-r-0 ml-2 focus:ring-black"
        placeholder="Search Movie . . . ."
      />
      <button className="border p-3 border-gray-600 border-l-0 rounded-r-xl bg-white">
        <FaSearch />
      </button>

      <Link
        className="white no-underline p-3 hover:bg-gray-900 transition-colors duration-200 rounded-xl ml-4 mr-3 text-white"
        href="/favorites"
      >
        {<BsBookmarkPlus />}
      </Link>

      <Link
        className="white no-underline p-2 hover:bg-gray-900 transition-colors duration-200 rounded-xl text-white"
        href="/signIn"
      >
        Sign In
      </Link>
    </div>
  );
}

export default Header;
