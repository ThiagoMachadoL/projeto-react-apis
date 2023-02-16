import styled from "styled-components";

export const Container = styled.div`
  padding: 16px;
  min-width: 400px;
  max-width: 480px;
  min-height: 200px;
  max-height: 250px;
  background-color: ${((props)=>props.backColors)};
  border-radius: 12px;
  display: flex;
  position: relative;
  margin: 50px;
  color: #ffffff;
  `
;

export const PokemonNumber = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 600;
  text-align: left;`
;

export const PokemonName = styled.h1`
  font-size: 32px;
  font-weight: 700;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 10px;`
;

export const PokemonType = styled.img`
  max-width: 100px;
  height: 32px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px dashed #ffffff;
  margin-right: 8px;`
;

export const TypesContainer = styled.div`
  margin-bottom: 52px;`
;

export const Pokeball = styled.img`
  position: absolute;
  top: 0;
  right: 0;`
;

export const DetalsButton = styled.button`
width: 114px;
height: 37px;

font-family: 'Inter';
font-style: normal;
font-size: 100%;
text-decoration-line: underline;

flex: none;
order: 0;
flex-grow: 0;
`
;

export const CatchButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 10px;
  width: 21vh;
  height: 5vh;
  background: #ffffff;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  position: absolute;
  bottom: 17px;
  right: 22px;
  z-index: 2;
  color: #000;
  cursor: pointer; 
&:
hover { background-color: #989191; color: #FFFFFF; }
`
  
;

export const RemoveButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 10px;
  width: 21vh;
  height: 5vh;
  background: #FF6262;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  position: absolute;
  bottom: 17px;
  right: 22px;
  z-index: 2;
  color: #000;
  cursor: pointer; 
&:
hover { background-color: #FFFFFF; color: #FF6262; }`
  
;
export const Pokemon = styled.img`
  width: 193px;
  height: 193px;
  position: absolute;
  top: -60px;
  right: 0;
  z-index: 2;`
;