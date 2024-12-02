import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import Logo from "./Logo";

function Header() {
  return (
    <div className="w-full h-20 bg-transparent bg-black flex justify-center items-center">
      <Logo />

      <input
        className=" w-1/2 p-2 border rounded-l-xl border-gray-600 border-r-0 ml-2 focus:ring-black"
        placeholder="Search Movie . . . ."
      />
      <button className="border p-3 border-gray-600 border-l-0 rounded-r-xl bg-white">
        <FaSearch />
      </button>
      <Link
        className="white no-underline p-2 hover:bg-gray-900 transition-colors duration-200 rounded-xl ml-2 text-white"
        href="/signIn"
      >
        Sign In
      </Link>
    </div>
  );
}

export default Header;
