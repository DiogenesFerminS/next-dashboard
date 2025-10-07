import { PokemonsGrid } from "@/pokemons/components";
import { PokeResponse, SimplePokemons } from "@/pokemons/interfaces";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: '151 Pokemons',
  description: 'page about pokemons'
}

const getPokeData = async (limit = 20, offset = 0): Promise<SimplePokemons[]> => {
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
  const resp: PokeResponse = await data.json();

  const pokemons = resp.results.map((pokemon) => ({
    id: pokemon.url.split('/').at(-2)!,
    name: pokemon.name,
  }));

  return pokemons;
}

const PokemonsPage = async () => {
  const pokemons = await getPokeData(151);
  return (
    <div className=" flex flex-col p-3">

      <span className="text-center mb-6 text-2xl font-bold">Pokemons List</span>

      <PokemonsGrid pokemons={pokemons}/>
      
    </div>
  )
}

export default PokemonsPage;
