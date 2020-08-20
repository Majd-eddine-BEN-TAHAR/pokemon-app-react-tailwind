import { useEffect, useReducer } from "react";

const ACTIONS = {
  MAKE_REQUEST: "make_request",
  GET_DATA: "get_data",
  ERROR: "error",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.MAKE_REQUEST:
      return { ...state, error: null, loading: true };

    case ACTIONS.GET_DATA:
      const { res } = action.payload;
      const data = {
        header: res.types.map((type) => {
          return type.type.name;
        }),
        body: {
          name: res.name,
          statData: res.stats.map((stat) => {
            return { name: stat.stat.name, value: stat.base_stat };
          }),
          profileData: [
            { name: "height", value: res.height + " ft" },
            { name: "weight", value: res.weight + " lbs" },
            {
              name: "abilities",
              value: res.abilities
                .map((ability) => {
                  return ability.ability.name;
                })
                .join(","),
            },
            {
              name: "experience",
              value: res.base_experience,
            },
            {
              name: "Nº of moves",
              value: res.moves.length,
            },
            {
              name: "order",
              value: res.order,
            },
          ],
        },
      };
      return {
        pokemonData: data,
        error: null,
        loading: false,
      };

    case ACTIONS.ERROR:
      return { ...state, error: action.payload.error, loading: false };
    default:
      return state;
  }
};

const useFetchPokemon = (id) => {
  const [state, dispatch] = useReducer(reducer, {
    pokemonData: {
      header: [],
      body: {
        name: "",
        statData: [],
        profileData: [],
      },
    },
    error: null,
    loading: false,
  });

  useEffect(() => {
    dispatch({ type: ACTIONS.MAKE_REQUEST });
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => res.json())
      .then((res) => {
        dispatch({
          type: ACTIONS.GET_DATA,
          payload: { res: res },
        });
      })
      .catch((err) => {
        dispatch({ type: ACTIONS.ERROR, payload: { error: err } });
      });
  }, [id]);
  const header = state.pokemonData.header;
  const body = state.pokemonData.body;
  return { header, body };
};

export default useFetchPokemon;
