import { toast } from "react-hot-toast";
import LoginRequired from "../_components/LoginRequired";
import NoBookmarks from "../_components/NoBookmarks";

export async function handleDeleteBookmark(movie, token) {
  try {
    const bookmarkID = movie.id;
    const response = await fetch("http://localhost:8080/bookmark", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token.value}`,
      },
      body: JSON.stringify({ bookmarkID }),
    });

    if (!response.ok) {
      throw new Error("Failed to delete bookmark");
    }
  } catch (error) {
    console.error("Error:", error.message);
  }
}

export async function handleAddBookmark(movie, token) {
  try {
    const {
      genres,
      overview: description,
      title,
      vote_average: rate,
      release_date: releaseDate,
      poster_path: posterPath,
    } = movie;

    const poster = `https://image.tmdb.org/t/p/original${posterPath}`;

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
        poster,
        genres,
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

export async function handleGetBookmarks(token, page) {
  if (!token) {
    return <LoginRequired />;
  }

  const bookmarksRaw = await fetch(
    `http://localhost:8080/bookmarks${`?page=${page}`}`,
    {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token.value}`,
      },
    }
  );

  if (!bookmarksRaw.ok) {
    return <NoBookmarks />;
  }

  const bookmarksJSON = await bookmarksRaw.json();

  return bookmarksJSON;
}
