import React from "react";

const Gif = ({ gif }) => {
  return (
    <div className="d-flex flex-column w-25 flex-grow-1 border rounded p-4 m-1 gif">
      <h4>{gif.title}</h4>
      <p>{gif.username}</p>
      <p>{gif.rating}</p>
      <img src={gif?.images?.original?.url} alt="the original gif url" />
      <button className="btn bg-dark">
        <a href={gif.url} target="_blank" rel="noreferrer">
          Check it out on giphy
        </a>
      </button>
    </div>
  );
};

export default Gif;
