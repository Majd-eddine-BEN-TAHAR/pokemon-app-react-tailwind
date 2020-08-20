import React from "react";
import CardHeader from "./CardHeader/CardHeader";
import CardBody from "./CardBody/CardBody";
import CardFooter from "./CardFooter/CardFooter";
import useFetchPokemon from "../../hooks/useFetchPokemon";

const PokeCard = (props) => {
  const pokeId = props.match.params.id;
  const imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokeId}.svg`;
  const { header, body } = useFetchPokemon(pokeId);
  return (
    <main className="mt-20 px-8 flex-1">
      <CardHeader goBack={props.history.goBack} pokeId={pokeId} data={header} />
      <CardBody imgSrc={imgSrc} body={body} />
      <CardFooter />
    </main>
  );
};

export default PokeCard;
