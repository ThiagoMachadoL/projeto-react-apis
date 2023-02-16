import React, { useEffect, useState } from "react";
import axios from "axios";
import { URL_BASE } from "../Constants/apiConstants";
import { addValueToKeyRequestList, addValueToKeyRequestPokemon, initialKeysRequestList } from "../útil/ReturnRequestPokemon";


export default function useRequestPokemon() {
  const urlInicial = `${URL_BASE}?limit=${25}}&offset=${0}`;
  const [pokemonList, setPokemonList] = useState(initialKeysRequestList);
  const [pokemons, setPokemons] = React.useState([]);
  const [error, setError] = useState();
  const [onLoad, setOnload] = useState(false);

  useEffect(() => {
    requestPokemon(urlInicial);
  }, []);

  const requestPokemon = async (url) => {
    setOnload(true);
    const res = await axios.get(url);
    setPokemonList(addValueToKeyRequestList(res));
    getPokemon(res.data.results);
    setOnload(false);
  };

  const getPokemon = (results) => {
    setOnload(true);
    const promisesArray = results.map((item) => {
      return axios.get(item.url);
    });

    Promise.all(promisesArray)
      .then((res) => {
        
        setPokemons( 
          res.map((item) => {
            return addValueToKeyRequestPokemon(item);
          })
        );
      })
      .catch((error) => {
        setError(error);
      });

    setOnload(false);
  };

  return { pokemons, pokemonList, requestPokemon, getPokemon, onLoad, error };
}
