import React, { useState } from "react";

const Search = ({ setCategory }) => {
  const [search, setSearch] = useState("");
  return (
    <div className="d-flex align-items-center flex-column">
      <h2 className="mb-4">Search for Gifs</h2>
      <div className="d-flex">
        <input
          className="form-control"
          id="searchInput"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Gifs..."
        />
        <button
          className="btn btn-primary align-center"
          onClick={() => setCategory(search)}
        >
          GO!
        </button>
      </div>
    </div>
  );
};

export default Search;
