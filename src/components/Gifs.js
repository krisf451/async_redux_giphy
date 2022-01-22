import React from "react";
import { useSelector } from "react-redux";
import Gif from "./Gif";

const Gifs = () => {
  const gifs = useSelector((state) => state.gifs);
  return (
    <div className="d-flex flex-wrap p-5 gifs">
      {gifs.map((gif, i) => (
        <Gif gif={gif} key={gif.id} />
      ))}
    </div>
  );
};

export default Gifs;
