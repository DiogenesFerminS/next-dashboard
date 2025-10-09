'use client';
import { Provider } from "react-redux"
import { store} from "."
import { useEffect } from "react";
import { setInitState } from "./pokemons/pokemons";

interface Props {
  children: React.ReactNode
}

const Providers = ({children}: Props) => {
  
  useEffect(() => {
    const favoritePokemos = JSON.parse(localStorage.getItem('favorite-pokemons') ?? '{}');
    store.dispatch(setInitState(favoritePokemos));
  }, [])

  return (
    <Provider store={store}>
        {children}
    </Provider>
  )
}

export default Providers