"use client";

import { toast } from "react-hot-toast";

function AddButton() {
  function handleClick() {
    toast.success("Movie added successfully!");
  }

  return (
    <button className="btn-add w-52" onClick={handleClick}>
      &#x2b; Add to list
    </button>
  );
}

export default AddButton;
