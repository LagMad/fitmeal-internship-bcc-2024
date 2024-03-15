import React, { useState } from "react";
import SVGs from "../shared/SVGs";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center justify-center">
      <div className="relative flex items-center">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleChange}
          className="border-[1.5px] border-cust-orange-normal px-16 py-2 rounded-md outline-none"
        />
        <button
          type="submit"
          className="absolute left-1 top-0 h-full px-4 flex items-center"
          style={{ backgroundColor: "transparent" }}
        >
          <SVGs.Search className="text-cust-orange-normal" />{" "}
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
