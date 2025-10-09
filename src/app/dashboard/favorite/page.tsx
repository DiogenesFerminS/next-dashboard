import { FavoritePokemons } from "@/pokemons/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Favorite Pokemons',
  description: 'Deserunt irure aute anim sit laborum dolor ipsum.'
}

const FavoritePokemonsPage = async () => {
  return (
    <div className=" flex flex-col p-3">

      <span className="text-center mb-6 text-2xl font-bold">Favorite Pokemons List</span>

      <FavoritePokemons/>
      
    </div>
  )
}

export default FavoritePokemonsPage;
