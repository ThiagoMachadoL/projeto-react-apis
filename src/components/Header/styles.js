import styled from 'styled-components'

export const Container = styled.div`
display: flex;
flex-direction: row;
flex-wrap: nowrap;
justify-content: space-around;
align-items: center;
align-content: center;
background-color: #ffffff; 
height: 10vw;
`
export const ImagePokemon = styled.img`
  width: 20%;


`
export const Space = styled.div`
width: 20vw;
`

export const Button = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 4px 10px;
background: #33A4F5;
border-radius: 8px;
color: #FFFFFF;
border-color: #33A4F5;
cursor: pointer; 
&:
hover { background-color: #FFFFFF; color: #33A4F5; }
width: 20vw;
height: 4.3vw;
font-family: 'Inter';
font-style: normal;
font-weight: bold;
font-size: 88%;

`


export const ContainerButton = styled.div`
    display: flex;
    gap: 35px;
`