import React from "react";

const CardFooter = () => {
  return (
    <footer className="py-4 px-2 border-t-4 border-yellow-600 bg-yellow-1000 rounded-b-lg">
      <p className="inline-block text-red-500"> Data From </p>
      <a
        href="https://pokeapi.co/docs/v2"
        className=" text-blue-600 hover:text-blue-400"
      >
        {" "}
        PokeApi.co
      </a>
    </footer>
  );
};

export default CardFooter;
