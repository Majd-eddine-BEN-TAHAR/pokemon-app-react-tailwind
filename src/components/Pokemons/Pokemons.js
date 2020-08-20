import React from "react";
import Pokemon from "../Pokemon/Pokemon";
import Spinner from "../Spinner/Spinner";

const Pokemons = ({ pokemons }) => {
  return (
    <div className="px-8 sm:grid sm:grid-cols-2 sm:gap-2 lg:grid-cols-3 xl:grid-cols-4">
      {pokemons.length ? (
        pokemons.map((pokemon, index) => {
          return (
            <Pokemon
              key={index}
              index={pokemon.id}
              name={pokemon.name}
              img={pokemon.img}
            />
          );
        })
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default Pokemons;
