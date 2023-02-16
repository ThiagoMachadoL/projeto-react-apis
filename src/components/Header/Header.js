import { useLocation, useNavigate } from "react-router-dom";
import { goToHome, goToList } from "../../routes/coordinator";
import { Button, Title, Container, ContainerButton, ImagePokemon, Space } from "./styles";
import imagePokemon from "../../assets/pokemon-tag.png";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";

function Header() {
  const context = useContext(GlobalContext);
  const {addToPokedex, inPokedex, removeFromPokedex } = context;
  const location = useLocation();
  const {state} = useLocation();

  const navigate = useNavigate();

  const getButton = () =>{

    if(inPokedex(state.id)){
      return ( <Button onClick={() => addToPokedex(state)}>
      Adicionar 
    </Button>)
    } else {
      return (  <Button  onClick={() => removeFromPokedex(state)}>
      Remover 
    </Button>)
    }
  }
  const renderHeader = () => {
    switch (location.pathname) {
      case "/":
        return (
          <>
            <Space>  </Space>
            <ImagePokemon src={imagePokemon}/>
            <Button onClick={() => goToList(navigate)}>
              Ver pokedex
            </Button>
          </>
        );
      case "/pokedex":
        return (
          <>
            <Space></Space>
            <ImagePokemon src={imagePokemon}/>
            <Button onClick={() => goToHome(navigate)}>
              Ver lista de Pokemons
            </Button>
          </>
        );
      default:
        return (
          <>
            <ImagePokemon src={imagePokemon}/>
            <ContainerButton>
            <Button onClick={() => goToHome(navigate)}>
              Pokelist
            </Button>
            {getButton()}
            </ContainerButton>
          </>
        );
    }
  };

  return <Container>{renderHeader()}</Container>;
}

export default Header;
