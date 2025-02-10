import { FaHeart } from "react-icons/fa";

function DeleteFavoriteButton({ onDelete }) {
  async function handleDelete() {
    if (confirm("Are you sure you want to delete this movie?")) {
      await onDelete();
    }
  }

  return (
    <button
      className="w-full py-2 bg-red-600 hover:bg-red-700 transition-all text-center text-sm font-semibold"
      onClick={handleDelete}
    >
      <FaHeart className="inline-block mr-2" /> Remove from Favorites
    </button>
  );
}

export default DeleteFavoriteButton;
