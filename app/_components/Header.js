import Link from "next/link";
import { BsBookmarkPlus } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";

import Logo from "./Logo";
import Input from "./Input";

function Header() {
  return (
    <div className="w-full bg-slate-950 h-20 bg-transparent flex justify-center items-center z-10 top-0 fixed">
      <Logo />

      <Input />

      <Link
        className="white no-underline p-3 hover:bg-gray-900 transition-colors duration-200 rounded-xl ml-4 mr-3 text-white"
        href="/favorites"
      >
        {<BsBookmarkPlus size={20} />}
      </Link>

      <Link
        className="white no-underline p-2 hover:bg-gray-900 transition-colors duration-200 rounded-xl text-white"
        href="/login"
      >
        Login
      </Link>

      <Link
        className="white no-underline pl-6 hover:bg-gray-900 text-white"
        href="/user-settings/2345"
      >
        <IoSettingsOutline size={24} />
      </Link>
    </div>
  );
}

export default Header;
