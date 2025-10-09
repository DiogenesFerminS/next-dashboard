'use client';
import Link from "next/link";
import { SimplePokemons } from "../interfaces";
import Image from "next/image";
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "@/store";
import { toggleFavorite } from "@/store/pokemons/pokemons";

interface Props {
  pokemon: SimplePokemons
}

const PokemonCard = ({ pokemon } : Props) => {
  const {id, name} = pokemon;
  const isFavorite = useAppSelector((state) => !!state.pokemons.favorite[id])
  const dispatch = useAppDispatch();

  const handleToggleFavorite = () => {
    dispatch( toggleFavorite(pokemon) )
  }

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
          <div
            onClick={handleToggleFavorite}
            className="px-4 py-2 hover:bg-gray-200 flex items-center gap-2 justify-center cursor-pointer"
          >
            <div className="text-red-600">
              {
                isFavorite 
                ? (<IoHeart size={20}/>)
                : (<IoHeartOutline size={20}/>)
              }
            </div>
            <div className="pl-3">
              {
                isFavorite
                ?(<p className="text-sm font-medium text-gray-800 leading-none">Favorito</p>)
                : (<p className="text-sm font-medium text-gray-800 leading-none">Añadir a Favoritos</p>)
              }
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default PokemonCard