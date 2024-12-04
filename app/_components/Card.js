import Image from "next/image";

import photo from "@/public/inception.png";
import { FaStar } from "react-icons/fa";

function Card() {
  return (
    <div className="h-72 flex w-full">
      <div className="w-2/5 bg-slate-300 object-cover">
        <Image src={photo} alt="slika role fill" />
      </div>
      <div className="w-3/5 bg-slate-500 flex flex-col">
        <h1 className="font-bold text-2xl p-3 h-2/5">Inception</h1>
        <p className="h-0.5/5 flex flex-row">RATING {<FaStar />} 4.7</p>
        <p className="h-0.5/5">zanr: Action</p>
        <p className="h-1/5">description: dobar film</p>
        <p className="h-1/5">glumci: Uzeir Rahmanovic i drugi...</p>
      </div>
    </div>
  );
}

export default Card;
