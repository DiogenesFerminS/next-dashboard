import { SimplePokemons } from "../interfaces";
import PokemonCard from "./PokemonCard";

interface Props {
  pokemons: SimplePokemons[]
}


const PokemonsGrid = ({pokemons}: Props) => {
  return (
    <div className="flex flex-wrap gap-10 justify-center items-center">
        
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon}/>
      ))}
    </div>
  );
}

export default PokemonsGrid