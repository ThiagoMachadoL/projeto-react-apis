import {  useEffect, useState } from "react";

import { GlobalContext } from "./GlobalContext";

export default function GlobalState(props) {
    const [pokedex, setPokedex] = useState([]);
    useEffect(()=>{console.log(pokedex)}, [pokedex] ) 
    const addToPokedex = (pokemonToAdd) => {
        const isAlreadyOnPokedex = pokedex.find(
            (pokemonInPokedex) => pokemonInPokedex.id === pokemonToAdd.id
        );
        if (!isAlreadyOnPokedex) {
            const newPokedex = [...pokedex, pokemonToAdd];
            setPokedex(newPokedex);
        }
    };
    const removeFromPokedex = (pokemonToRemove) => {
        const newPokedex = pokedex.filter(
            (pokemonInPokedex) => pokemonInPokedex.id !== pokemonToRemove.id
        );
        setPokedex(newPokedex);
    };

    const inPokedex = (id) => {
        return pokedex.findIndex((p) => p.id === id) === -1;
    } 

    const context = {
        addToPokedex,
        pokedex,
        removeFromPokedex,
        inPokedex
    }

    return (
        <GlobalContext.Provider value={context}>
            {props.children}
        </GlobalContext.Provider>
    )
}
