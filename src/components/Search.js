import React, { useState } from "react";
import { fetchTrendingGifs } from "../actions";
import { useDispatch } from "react-redux";

const Search = ({ setCategory }) => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  return (
    <div className="d-flex align-items-center flex-column">
      <h2 className="mb-4">Search for Gifs</h2>
      <div className="d-flex">
        <input
          className="form-control-lg"
          id="searchInput"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Gifs..."
        />
        <button
          className="btn btn-primary m-1"
          onClick={() => setCategory(search)}
        >
          GO!
        </button>
        <button
          className="btn btn-success m-1"
          onClick={() => dispatch(fetchTrendingGifs())}
        >
          FETCH TRENDING
        </button>
      </div>
    </div>
  );
};

export default Search;
