import { SimplePokemons } from '@/pokemons/interfaces';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface PokemonsState {
  favorite: {[key: string]: SimplePokemons},
}

// const getInitialState = (): PokemonsState => {
// const favorites = JSON.parse( localStorage.getItem('favorite-pokemons') ?? '{}'  );
//   return favorites;
// }

const initialState: PokemonsState = {
  favorite: {}
}

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    setInitState(state, action: PayloadAction<{[key: string]: SimplePokemons}>) {
      state.favorite = action.payload;
    },

    toggleFavorite(state, action: PayloadAction<SimplePokemons>) {
      const pokemon = action.payload;
      const { id } = pokemon;

      if(!!state.favorite[id]){
        delete state.favorite[id];
      }else{
        state.favorite[id] = pokemon;
      }

      localStorage.setItem('favorite-pokemons', JSON.stringify(state.favorite));
    },
  }
});

export const {toggleFavorite, setInitState} = pokemonsSlice.actions

export default pokemonsSlice.reducer