import FavoritesCard from "./FavoritesCard";

function FavoritesList({ favorites }) {
  return (
    <div className="grid grid-cols-2 w-1/2 mx-auto m-10 gap-6">
      {favorites.map((movie, index) => (
        <FavoritesCard movie={movie} key={index} />
      ))}
    </div>
  );
}

export default FavoritesList;
