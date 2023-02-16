import styled from "styled-components";

export const Container = styled.main`
    display: grid;
    grid-template-columns: 1fr 0.5fr  1fr 1fr  1fr 1.2fr  1fr 1fr 1fr 1fr 1fr 1fr  1fr 1fr  1fr 1fr  1fr 1fr 1fr 1fr;
    grid-template-rows: repeat(26, 1fr);
    grid-column-gap: 0vw;
    grid-row-gap: 0vw;
    height: 55vw;
    width: 100%;
    background-color:  #5D5D5D;

    `


export const MainPick = styled.div`
    display: grid;
    grid-area: 4 / 2 / 25 / 20;
    border-radius: 3vw;
    background-color: ${((props) => props.backColors)};
    `


export const FrontPick = styled.img`
    display: grid;
    grid-area: 5 / 3 / 14 / 6;
    height:100%;
    width: 120%;
    background-color: white;
    border-radius: 0.8vw;

    `


export const BackPick = styled.img`
    display: grid;
    grid-area: 15 / 3 / 24/ 6;
    height:100%;
    width: 120%;
    background-color: white;
    border-radius: 0.8vw;
    `

export const StatsPick = styled.div`
    grid-area: 5 / 7 / 24 / 12;
    background: #FFFFFF;
    border-radius: 0.68vw;
    padding: 1vw;
    display: flex;
    flex-direction: column;
    font-family: 'Inter';
    font-style: normal;
    `
export const StatsTitle = styled.h1`
font-size: 2.5vw;
`
export const StatsStyle = styled.div`
display: flex;
flex-direction: row;
gap: 1vw;
font-size: 1.46vw;

`
export const StatsName = styled.div`
display: flex;
flex-direction: column;
gap: 2vw;
margin-top: 4vw;
`
export const StatsNumbers = styled.div`
display: flex;
flex-direction: column;
gap: 2vw;
margin-top: 4vw;
`
export const StatsHp = styled.div`
    font-weight: bold;
`
export const StatsAtk = styled.div`    
font-weight: bold;

    `
export const StatsDef = styled.div`    
font-weight: bold;

    `
export const StatsSpeed = styled.div` 
font-weight: bold;

    `

export const StatsSpeAtk = styled.div`   
font-weight: bold;

`
export const StatsSpeDef = styled.div`      
font-weight: bold;
  
  `
export const StatsTotal = styled.div`      
font-weight: bold;
  
  `
  export const BarStats = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2vw;
  margin-top: 4vw;
  justify-content: center;
  height: 20.6vw;
  `

    export const StatsBarHp = styled.div`      
  background-color: red;
  height: 100%;
  width: ${(props)=> props.baseState / 9 }vw;
  background-color: hsl(calc(${(props) => props.baseState} * 0.799), 80%, 50%) ;
  border-radius: 0.6vw;
 aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
  `
  export const StatsBarAtk = styled.div`      
  background-color: red;
  height: 100%;
  width: ${(props)=> props.baseState / 9}vw;
  background-color: hsl(calc(${(props) => props.baseState} * 0.799), 80%, 50%) ;
  border-radius: 0.6vw;

  `
  export const StatsBarDef = styled.div`      
  background-color: red;
  height: 100%;
  width: ${(props)=> props.baseState / 9 }vw;
  background-color: hsl(calc(${(props) => props.baseState} * 0.799), 80%, 50%) ;
  border-radius: 0.6vw;

  `
  export const StatsBarSpeAtk = styled.div`      
  background-color: red;
  height: 100%;
  width: ${(props)=> props.baseState / 9 }vw;
  background-color: hsl(calc(${(props) => props.baseState} * 0.799), 80%, 50%) ;
  border-radius: 0.6vw;


  `
  export const StatsBarSpeDef = styled.div`      
  background-color: red;
  height: 100%;
  width: ${(props)=> props.baseState / 9}vw;
  background-color: hsl(calc(${(props) => props.baseState} * 0.799), 80%, 50%);
  border-radius: 0.6vw;
  `
  export const StatsBarSpeed = styled.div`      
  background-color: red;
  height: 100%;
  width: ${(props)=> props.baseState / 9 }vw;
  background-color: hsl(calc(${(props) => props.baseState} * 0.799), 80%, 50%) ;
  border-radius: 0.6vw;

  `

export const MovesPick = styled.div`
    display: grid;
    grid-area: 10 / 13 / 24 / 17;
    background: #FFFFFF;
    border-radius: 0.8vw;
    background-color: white;
    margin-top: 1vw;
    padding: 1vw;
    gap: 1vw;
    font-family: 'Inter';
    font-style: normal;
    `
    export const MovesTitle = styled.h1`
font-size: 2.5vw;
`
export const MovesTypes = styled.div`
    background: #ECECEC;
    border: 0.1vw dashed rgba(0, 0, 0, 0.14);
    border-radius: 0.8vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0.6vw;
    gap: 1vw;
    width: 10vw;
    font-size: 1.2vw;
    `

export const NamePick = styled.div`
    display: grid;
    grid-area: 5 / 13 / 7 / 16;
    background-color: ${((props) => props.backColors)};
    font-family: 'Inter';
    font-style: normal;
    font-weight: bold;
    gap: 0.2vw;
    color: white;
    `
export const NamePick2 = styled.div`
    font-size: 3vw;

    `
export const IdPick = styled.div`
    font-size: 1.6vw;

    `


export const SpacePick = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1vw;
`

export const ImgPick = styled.img`
    width: 32%;

`

export const ImagePick = styled.img`
    display: grid;
    grid-area: 2 / 19 / 5 / 17;
    width:150%;
    height:200%;
    ;


    `
export const DetailPick = styled.div`
    display: grid;
    grid-area: 1 / 2 / 3 / 6;
    border-radius: nullpx;
    font-family: 'Inter';
    font-style: normal;
    font-weight: bold;
    font-size: 3.8vw;
    letter-spacing: 0em;
    text-align: left;
    color: white;
    margin-top: 8%;
    margin-bottom: 22%;
    `




