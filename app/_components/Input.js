"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

function Input() {
  const [input, setInput] = useState("");

  const searchParams = useSearchParams();
  const router = useRouter();

  const onChange = (e) => {
    setInput(e.target.value);
  };

  const setQueryParams = () => {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set("search", `${input}`);

    router.push(`/${newParams.toString()}`);
  };

  return (
    <>
      <input
        className=" w-1/2 p-[6px] border rounded-l-xl border-gray-600 border-r-0 ml-2 focus:ring-black text-lg font-semibold text-gray-600"
        placeholder="Search Movie . . . ."
        value={input}
        onChange={onChange}
      />
      <button
        className="border p-3 border-gray-600 border-l-0 rounded-r-xl bg-white"
        onClick={setQueryParams}
      >
        <FaSearch />
      </button>
    </>
  );
}

export default Input;
