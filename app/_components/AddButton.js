"use client";

import { toast } from "react-hot-toast";

function AddButton({
  genres,
  description,
  title,
  poster,
  rate,
  releaseDate,
  token,
}) {
  async function handleClick() {
    try {
      if (!token || !token.value) {
        throw new Error("Login for this feature!");
      }
      const response = await fetch("http://localhost:8080/bookmark", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token.value}`,
        },
        body: JSON.stringify({
          title,
          description,
          rate,
          releaseDate,
        }),
      });

      if (!response.ok) {
        throw new Error("Movie is already in bookmarks!");
      }

      toast.success("Movie added successfully!");
    } catch (error) {
      toast.error(error.message || "");
    }
  }

  return (
    <button className="btn-add w-52" onClick={handleClick}>
      &#x2b; Add to list
    </button>
  );
}

export default AddButton;
