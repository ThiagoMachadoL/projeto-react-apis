import Header from "../../components/Header/Header";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import { useContext} from "react";
import { CardsContainer } from "../PokedexPage/styles";
import { GlobalContext } from "../../contexts/GlobalContext";
import { Title } from "./styles";

function PokedexListPage() {

  const context = useContext(GlobalContext);
  const { addToPokedex, pokedex, removeFromPokedex,inPokedex} = context;

return (
  <div>
      <Header/>
      <Title> Pokedéx</Title>
      <CardsContainer>
          {pokedex.map((pokemon)=>{
              return <PokemonCard
              key={pokemon.name}
              addToPokedex={addToPokedex}
              inPokedex={inPokedex}
              removeFromPokedex={removeFromPokedex}
              pokemon={pokemon}
              />
          })}
      </CardsContainer>
  </div>
)
}

export default PokedexListPage;
