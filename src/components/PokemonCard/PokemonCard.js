import { CatchButton, Container, DetalsButton, Pokeball, Pokemon, PokemonName, PokemonNumber, PokemonType, RemoveButton, TypesContainer } from "./styles"
import pokeball from '../../assets/pngwing 2.png'
import { cardTypes } from "../../Functions/cardTypes"
import { useNavigate } from "react-router-dom"
import { goToDetailsPage } from "../../routes/coordinator"
import { corFundoCard } from "../../Functions/backColors"


const PokemonCard = (props) => {
  const {addToPokedex, removeFromPokedex, inPokedex, pokemon } = props;
  const navigate = useNavigate()
  

  const getButton = () =>{

    if(inPokedex(pokemon.id)){
      return ( <CatchButton onClick={() => addToPokedex(pokemon)}>
      Adicionar 
    </CatchButton>)
    } else {
      return (  <RemoveButton  onClick={() => removeFromPokedex(pokemon)}>
      Remover 
    </RemoveButton>)
    }
  }
  return (
<Container backColors={corFundoCard(pokemon.types[0])}>
      <div>       
        <PokemonNumber>{pokemon.id}</PokemonNumber>
        <PokemonName>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</PokemonName>
        <TypesContainer>
        {pokemon.types.map((type) => {
                return <PokemonType key={type} src={cardTypes(type)} alt='' />
            })}
        </TypesContainer>
        <DetalsButton onClick={() => goToDetailsPage(navigate,{state: pokemon})}>Detalhes</DetalsButton>
      </div>
      <div>
        <Pokemon src={pokemon.sprites.default} alt={pokemon.name}/>
        {getButton()}
      </div>
      <Pokeball src={pokeball} alt="pokeball" />
    </Container>
  )
}

export default PokemonCard
