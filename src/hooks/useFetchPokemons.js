import { useEffect, useReducer } from "react";

const ACTIONS = {
  MAKE_REQUEST: "make_request",
  GET_DATA: "get_data",
  ERROR: "error",
  HAS_NEXT_PAGE: "has_next_page",
  HAS_PREVIOUS_PAGE: "has_previous_page",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.MAKE_REQUEST:
      return {
        ...state,
        error: null,
        loading: true,
        hasNextPage: null,
        hasPreviousPage: null,
      };

    case ACTIONS.GET_DATA:
      return {
        pokemons: action.payload.pokemons,
        error: null,
        loading: false,
        has_next_page: action.payload.hasNextPage,
        has_previous_page: action.payload.hasPreviousPage,
      };

    case ACTIONS.ERROR:
      return { ...state, error: action.payload.error, loading: false };
    default:
      return state;
  }
};

const useFetchPokemons = (offset) => {
  const [state, dispatch] = useReducer(reducer, {
    pokemons: [],
    error: null,
    has_next_page: null,
    has_previous_page: null,
    loading: false,
  });

  useEffect(() => {
    dispatch({ type: ACTIONS.MAKE_REQUEST });
    fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("1");
        } else {
          return res.json();
        }
      })
      .then((res) => {
        const pokemonsData = res.results.map((row, index) => {
          return {
            name: row.name,
            img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
              offset + index + 1
            }.svg`,
            id: offset + index + 1,
          };
        });

        dispatch({
          type: ACTIONS.GET_DATA,
          payload: {
            pokemons: pokemonsData,
            hasNextPage: res.next,
            hasPreviousPage: res.previous,
          },
        });
      })
      .catch((err) => {
        if (err === "1") {
          dispatch({
            type: ACTIONS.ERROR,
            payload: {
              error: `Network response was not ok, Try reloading`,
            },
          });
        } else {
          dispatch({
            type: ACTIONS.ERROR,
            payload: {
              error: `There has been a problem with your fetch operation`,
            },
          });
        }
      });
  }, [offset]);

  const pokemons = state.pokemons;
  const error = state.error;
  const has_next_page = state.has_next_page;
  const has_previous_page = state.has_previous_page;
  const loading = state.loading;
  return {
    pokemons,
    error,
    has_next_page,
    has_previous_page,
    loading,
  };
};

export default useFetchPokemons;
