import Image from "next/image";
import photo from "@/public/no-posterMovie-found.png";

function SuggestedMovie({ title, poster_path, release_date, selectedID }) {
  let poster = poster_path;
  if (poster_path.includes("w500null")) poster = photo;

  return (
    <div className="transform transition duration-500 hover:scale-110 p-5 shrink-0 max-w-xl max-h-min">
      <Image
        className="w-auto min-w-fit max-w-xl max-h-96 rounded-lg shadow-xl dark:shadow-gray-800"
        src={poster}
        alt={poster}
        width={576}
        height={384}
      />
      <div className="pt-3 max-w-xs">
        <span>{title}</span>
        <p>{release_date}</p>
      </div>
    </div>
  );
}

export default SuggestedMovie;
