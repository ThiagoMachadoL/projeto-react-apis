import React, { useContext, useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import PokemonCard from '../../components/PokemonCard/PokemonCard'
import { CardsContainer, Title } from './styles'
import { GlobalContext } from '../../contexts/GlobalContext'
import useRequestPokemon from '../../Hooks/useRequestPokemon'


const PokedexPage = () => {

  const context = useContext(GlobalContext);
  const {addToPokedex, inPokedex, removeFromPokedex } = context;
  const { pokemons} = useRequestPokemon();

    return (
      <div>
          <Header/>
          <Title>Todos os Pokemons</Title>
          <CardsContainer>
                          {pokemons.filter((p)=>{return inPokedex(p.id)}).map((pokemon)=>{
                  return <PokemonCard
                  key={pokemon.name}
                  pokemon={pokemon}
                  addToPokedex={addToPokedex}
                  inPokedex={inPokedex}
                  removeFromPokedex={removeFromPokedex}
                  />
              })}
          </CardsContainer>
      </div>
  );
}


















export default PokedexPage