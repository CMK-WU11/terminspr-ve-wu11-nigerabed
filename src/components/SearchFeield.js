"use client";


import { useState } from "react";

import Image from "next/image";
import search from "../assets/search.png";

export default function SearchField() {
    const [searchedText, setSearchedText] = useState("");

    async function handleSearch(e) {
        e.preventDefault();
        
    }

  return (
    <>
      <form onSubmit={handleSearch} className="flex justify-center relative">
        <input
          name="search"
          onChange={(e) => setSearchedText(e.target.value)}
          value={searchedText}
          type="search"
          className="h-[3.5em] w-[85%] bg-[#7D5B75] mt-[.5em]"
        />
        <Image
          src={search}
          alt="search"
          width={35}
          height={35}
          className="absolute right-[3em] top-[1.2em] text-black "
        />
      </form>
    </>
  );
}
