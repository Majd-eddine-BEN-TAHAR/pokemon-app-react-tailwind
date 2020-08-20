import React from "react";
import Pokemons from "./../Pokemons/Pokemons";
import Pagination from "../Pagination/Pagination";
import Spinner from "../Spinner/Spinner";

const Main = ({
  pokemonsData,
  loading,
  setOffset,
  hasNextPage,
  hasPreviousPage,
  offset,
}) => {
  return (
    <main className="mt-20 flex-1">
      {loading && <Spinner />}
      <Pagination
        setOffset={setOffset}
        hasNextPage={hasNextPage}
        hasPreviousPage={hasPreviousPage}
        offset={offset}
      />
      <Pokemons pokemons={pokemonsData} />
    </main>
  );
};

export default Main;
