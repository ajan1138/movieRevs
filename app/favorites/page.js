import Header from "../_components/Header";
import FavoritesList from "../_components/FavoritesList";

async function page() {
  const bookmarksRaw = await fetch("http://localhost:8080/bookmarks");

  if (!bookmarksRaw.ok) {
    throw new Error("Failed to fetch bookmarks");
  }

  const bookmarks = await bookmarksRaw.json();

  return (
    <div>
      <Header />
      <span className="font-bold text-white">FAVORITES</span>
      <div className="min-h-screen bg-gray-900 text-white p-6">
        <h1 className="text-4xl font-bold text-center mb-6 mt-[100px]">
          My Favorites
        </h1>
        <FavoritesList favorites={bookmarks} />
      </div>
    </div>
  );
}

export default page;
