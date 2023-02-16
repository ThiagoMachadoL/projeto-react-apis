import { useLocation } from "react-router-dom"
import Header from "../../components/Header/Header"
import { corFundoCard } from "../../Functions/backColors";
import { cardTypes } from "../../Functions/cardTypes";
import { BackPick, BarStats, Container, DetailPick, FrontPick, IdPick, ImagePick, ImgPick, MainPick, MovesPick, MovesTitle, MovesTypes, NamePick, NamePick2, SpacePick, StatsAtk, StatsBar, StatsBarAtk, StatsBarDef, StatsBarHp, StatsBarSpeAtk, StatsBarSpeDef, StatsBarSpeed, StatsDef, StatsHp, StatsName, StatsNumbers, StatsPick, StatsSpeAtk, StatsSpeDef, StatsSpeed, StatsStyle, StatsTitle, StatsTotal } from "./styles";


const PokemonDetailPage = (props) => {

  const {state} = useLocation();

    const value1 = state.stats[0].base_stat
    const value2 = state.stats[1].base_stat 
    const value3 = state.stats[2].base_stat
    const value4 = state.stats[3].base_stat
    const value5 = state.stats[4].base_stat
    const value6 = state.stats[5].base_stat
    
    const StatsSome = value1 + value2 + value3 + value4 + value5 + value6
    console.log(StatsSome)

  
 console.log(StatsSome)
  return (
    <div>
      <Header state={state} />
      <Container>
      <MainPick  backColors={corFundoCard(state.types[0])}/>
        <FrontPick src={state.sprites.frontDefault} alt={state.name}/>    
        <BackPick src={state.sprites.backDefault} alt={state.name}/>
        <NamePick backColors={corFundoCard(state.types[0])}>
          <IdPick>#{state.id}</IdPick>
          <NamePick2> {state.name.charAt(0).toUpperCase() + state.name.slice(1)}</NamePick2>
          <SpacePick>
          {state.types.map((type) => {
                return <ImgPick key={type} src={cardTypes(type)} alt='' />
            })}      </SpacePick>    
         </NamePick>
        <StatsPick>
          <StatsTitle>Base stats:</StatsTitle>
          <StatsStyle>
          <StatsName>
          <div> HP </div>   
          <div>Attack </div>
          <div>Defense </div>
          <div>Sp.Atk </div>
          <div>Sp.Def </div>
          <div>Speed </div>
          <div>Total</div>
          </StatsName>
          <StatsNumbers>
          <StatsHp> {state.stats[0].base_stat}</StatsHp>   
          <StatsAtk>{state.stats[1].base_stat}</StatsAtk>
          <StatsDef> {state.stats[2].base_stat}</StatsDef>
          <StatsSpeAtk> {state.stats[3].base_stat}</StatsSpeAtk>
          <StatsSpeDef>{state.stats[4].base_stat}</StatsSpeDef>
          <StatsSpeed>{state.stats[5].base_stat}</StatsSpeed>
          <StatsTotal>{StatsSome}</StatsTotal>
          </StatsNumbers>
          <BarStats>
          <StatsBarHp baseState={state.stats[0].base_stat}/>
          <StatsBarAtk baseState={state.stats[1].base_stat}/> 
          <StatsBarDef baseState={state.stats[2].base_stat}/> 
          <StatsBarSpeAtk baseState={state.stats[3].base_stat}/> 
          <StatsBarSpeDef baseState={state.stats[4].base_stat}/> 
          <StatsBarSpeed baseState={state.stats[5].base_stat}/> 
          </BarStats>
          </StatsStyle>
        </StatsPick>
     
        <MovesPick>
          <MovesTitle>Moves:</MovesTitle>
         {state.moves.map((move) => {
                    return <MovesTypes key={move}>{move}</MovesTypes>
                })}
        </MovesPick>
        <ImagePick src={state.sprites.default} alt={state.name}/>
        <DetailPick>
          Detalhes
        </DetailPick>
      </Container>
    </div>
  )
}

export default PokemonDetailPage