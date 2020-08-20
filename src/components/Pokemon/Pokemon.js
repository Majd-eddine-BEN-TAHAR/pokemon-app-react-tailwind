import React from "react";
import { Link } from "react-router-dom";

const Pokemon = ({ index, name, img }) => {
  return (
    <Link to={"/" + index} className="block">
      <div className="h-64 bg-yellow-1000 my-4 rounded-lg cursor-pointer shadow-lg transition duration-100 hover:bg-green-1000 sm:my-0">
        <img src={img} alt="" className="h-40 mx-auto my-4 p-2" />
        <h1 className="px-4 py-3 text-3xl text-red-600 border-t-4 border-green-600 capitalize md:text-4xl">
          <span className="text-green-600">{index}</span>.&nbsp;&nbsp;{name}
        </h1>
      </div>
    </Link>
  );
};

export default Pokemon;
