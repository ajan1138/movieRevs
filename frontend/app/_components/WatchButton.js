"use client";

import { toast } from "react-hot-toast";

function WatchButton() {
  function handleClick() {
    toast.success("User account successfully updated");
  }

  return (
    <button className="btn-add w-52" onClick={handleClick}>
      &#9658; Watch Now
    </button>
  );
}

export default WatchButton;
