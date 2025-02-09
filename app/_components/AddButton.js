"use client";

import { toast } from "react-hot-toast";
import { handleAddBookmark } from "../services/bookmarksApi";

function AddButton({ movie, token, poster }) {
  return (
    <button
      className="btn-add w-52"
      onClick={() => handleAddBookmark(movie, token)}
    >
      &#x2b; Add to list
    </button>
  );
}

export default AddButton;
