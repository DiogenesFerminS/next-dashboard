'use client'
import { useAppSelector } from "@/store"
import PokemonsGrid from "./PokemonsGrid"

const FavoritePokemons = () => {
  
  const pokemonsFavorite = Object.values( useAppSelector((state) => state.pokemons.favorite) );


  return (
    <>  
        {
          pokemonsFavorite !== undefined
          ? (
            pokemonsFavorite.length === 0

            ?(<><span className="text-center w-full">No hay pokemones favoritos empieza añadiendo alguno</span></>)
            :(<PokemonsGrid pokemons={pokemonsFavorite}/>)
          )
          : (<span className="text-center w-full">Loading...</span>)
        }
    </>
  )
}

export default FavoritePokemons