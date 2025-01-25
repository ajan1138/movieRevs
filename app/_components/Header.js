import Link from "next/link";
import { BsBookmarkPlus } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import Logo from "./Logo";
import Input from "./Input";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import LogoutButton from "./_form-components/LogoutButton";

async function Header() {
  const cookieStore = cookies();
  const tokenCookie = (await cookieStore).get("token");

  let user = null;

  if (tokenCookie) {
    try {
      const decodedToken = jwt.decode(tokenCookie.value);
      user = decodedToken;
    } catch (error) {
      console.error("Error decoding token:", error);
    }
  }

  return (
    <div className="w-full bg-slate-600 h-20 bg-transparent flex justify-center items-center z-10 top-0 fixed">
      <Logo />
      <Input />

      <Link
        className="white no-underline p-3 hover:bg-gray-900 transition-colors duration-200 rounded-xl ml-4 mr-3 text-white"
        href="/favorites"
      >
        <BsBookmarkPlus size={20} />
      </Link>

      {user ? (
        <>
          <span className="text-white mr-4 capitalize">
            Welcome, {user.name}
          </span>
          <Link
            className="white no-underline pl-6 hover:bg-gray-900 text-white"
            href={`/user-settings/${user.userId}`}
          >
            <IoSettingsOutline size={24} />
          </Link>

          <LogoutButton token={tokenCookie.value}>Logout</LogoutButton>
        </>
      ) : (
        <Link
          className="white no-underline p-2 hover:bg-gray-900 transition-colors duration-200 rounded-xl text-white"
          href="/login"
        >
          Login
        </Link>
      )}
    </div>
  );
}

export default Header;
