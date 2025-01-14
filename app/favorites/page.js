import Header from "../_components/Header";
import FavoritesList from "../_components/FavoritesList";
import Pagination from "../_components/Pagination";

function page() {
  const favorites = [
    {
      title: "Inception",
      rating: 4.7,
      genre: "Action",
      description: "Dobar film",
      actors: "Uzeir Rahmanović i drugi...",
    },
    {
      title: "Interstellar",
      rating: 4.8,
      genre: "Sci-Fi",
      description: "Fantastičan film",
      actors: "Matthew McConaughey i drugi...",
    },
    {
      title: "The Dark Knight",
      rating: 4.9,
      genre: "Crime",
      description: "Klasičan Batman",
      actors: "Christian Bale, Heath Ledger...",
    },
  ];

  return (
    <div>
      <Header />
      <span className="font-bold text-white">FAVORITES</span>
      <div className="min-h-screen bg-gray-900 text-white p-6">
        <h1 className="text-4xl font-bold text-center mb-6 mt-[100px]">
          My Favorites
        </h1>
        <FavoritesList favorites={favorites} />
        {favorites.length > 3 && <Pagination />}
      </div>
    </div>
  );
}

export default page;
