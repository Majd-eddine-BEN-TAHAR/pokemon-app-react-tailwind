import React, { useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import background from "./assets/images/background.jpg";
import PokeCard from "./components/PokeCard/PokeCard";
import { Route, Switch, Redirect } from "react-router-dom";
import useFetchPokemons from "./hooks/useFetchPokemons";
import Modal from "./components/Modal/Modal";

function App() {
  const [offset, setOffset] = useState(0);
  const {
    pokemons,
    error,
    has_next_page,
    has_previous_page,
    loading,
  } = useFetchPokemons(offset);

  return (
    <div
      className="flex flex-col w-full min-h-screen bg-fixed overflow-auto"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      {error ? <Modal error={error} /> : null}
      <Route path="/" component={Header} />
      <Switch>
        <Route
          path="/"
          exact
          render={() => {
            return (
              <Main
                pokemonsData={pokemons}
                loading={loading}
                setOffset={setOffset}
                hasNextPage={has_next_page}
                hasPreviousPage={has_previous_page}
                offset={offset}
              />
            );
          }}
        />
        <Route path="/:id" exact component={PokeCard} />
        <Redirect to="/" />
      </Switch>
      <Route path="/" component={Footer} />
    </div>
  );
}

export default App;
