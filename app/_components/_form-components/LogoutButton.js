"use client";

import { useRouter } from "next/navigation";

function LogoutButton({ children, token }) {
  const router = useRouter();

  async function handleLogout() {
    try {
      const response = await fetch("http://localhost:8080/logout", {
        method: "POST",
        credentials: "include",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        router.push("/");
      } else {
        console.error("Logout failed");
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  }

  return (
    <button
      className="white no-underline p-2 hover:bg-gray-900 transition-colors duration-200 rounded-xl ml-4 text-white"
      onClick={handleLogout}
    >
      {children}
    </button>
  );
}

export default LogoutButton;
