import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ErrorPage from '../Pages/ErrorPage/ErrorPage'
import PokedexPage from '../Pages/PokedexPage/PokedexPage'
import PokemonDetailPage from '../Pages/PokemonDetailPage/PokemonDetailPage'
import PokemonListPage from '../Pages/PokemonListPage/PokemonListPage'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PokedexPage />
          }
        />
        <Route
          path="/details"
          element={
            <PokemonDetailPage
            />
          }
        />
        <Route
          path="/pokedex"
          element={
            <PokemonListPage
            />
          }
        />
         <Route 
         path="*" 
         element={<ErrorPage />} 
         />
      </Routes>
      
    </BrowserRouter>
  )
}

export default Router