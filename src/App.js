import React, { useState, useEffect } from "react";
import "./App.css";

import Gifs from "./components/Gifs";
import Search from "./components/Search";

import { fetchGifs } from "./actions";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const [category, setCategory] = useState("dogs");
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchGifs(category));
  }, [category, dispatch]);

  if (loading)
    return (
      <div className="d-flex justify-content-center align-items-center spin-center">
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  if (error) return <h1 className="text-center">{error.message}</h1>;
  return (
    <div className="app">
      <Search setCategory={setCategory} />
      <Gifs />
    </div>
  );
}

export default App;
