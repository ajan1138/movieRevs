"use client";

import { useCon } from "@/app/_contexts/emailAndPasswordContext";
import { handleLogout } from "@/app/services/usersApi";
import { useRouter } from "next/navigation";

function LogoutButton({ children, token }) {
  const router = useRouter();

  const { setEmail, setPassword, setConfirmPassword } = useCon();

  return (
    <button
      className="white no-underline p-2 hover:bg-gray-900 transition-colors duration-200 rounded-xl ml-4 text-white"
      onClick={() =>
        handleLogout(token, router, setEmail, setPassword, setConfirmPassword)
      }
    >
      {children}
    </button>
  );
}

export default LogoutButton;
