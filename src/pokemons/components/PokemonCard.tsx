import Link from "next/link";
import { SimplePokemons } from "../interfaces";
import Image from "next/image";
import { IoHeartOutline } from "react-icons/io5";

interface Props {
  pokemon: SimplePokemons
}

const PokemonCard = ({ pokemon } : Props) => {
  const {id, name} = pokemon;
  return (
    <div className="mx-auto right-0 mt-2 w-60">
      <div className="bg-white rounded overflow-hidden shadow-lg">
        <div className="text-center p-6 bg-gray-800 border-b flex flex-col justify-center items-center">
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
            alt={pokemon.name}
            width={100}
            height={100}
            priority={false}
          />
          <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">{name}</p>
          <div className="mt-5">
            <Link
                href={`/dashboard/pokemons/${name}`} 
                className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
            >
              View Details
            </Link>
          </div>
        </div>
        <div className="border-b">
          <Link
            href="/dashboard/main"
            className="px-4 py-2 hover:bg-gray-200 flex items-center gap-2 justify-center"
          >
            <div className="text-red-600">
              <IoHeartOutline size={20}/>
            </div>
            <div className="pl-3">
              <p className="text-sm font-medium text-gray-800 leading-none">
                Añadir a Favoritos
              </p>
              <p className="text-xs text-gray-500">Este pokemon no esta en favoritos</p>
            </div>
          </Link>
         
        </div>
      </div>
    </div>
  );
}

export default PokemonCard