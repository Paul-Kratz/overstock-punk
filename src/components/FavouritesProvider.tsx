import React, { createContext, useContext, useState } from 'react';
import { IBeer } from '../models/IBeer';
import { IFavouritesContext } from '../models/IFavouritesContext';
export const FavouritesContext = createContext<IFavouritesContext>({} as IFavouritesContext);
type FavouritesProviderProps = {
    children: React.ReactElement
}

const FavouritesProvider = ({ children }: FavouritesProviderProps) => {
    const [favourites, setFavourites] = useState<IBeer[]>([]);
    const addFavourite = (beer: IBeer) => {
        const existing = favourites?.findIndex(b => b.id === beer.id);
        if (existing !== -1) {
            throw new Error("Beer is already in favourites. Cannot add it again.")
        }
        setFavourites([...favourites, beer]);
    }

    const isFavourite = (id: number) => {
        const existing = favourites?.findIndex(b => b.id === id);
        return existing === -1 ? false : true;
    }
    const removeFavourite = (id: number) => {
        const updatedFavourites = [...favourites];
        const indexToDelete = updatedFavourites?.findIndex(b => b.id === id);
        if (indexToDelete === -1) {
            throw new Error("Beer is not in favourites & so cannot be removed.")
        }
        updatedFavourites.splice(indexToDelete, 1);
        setFavourites(updatedFavourites);
    }
    return <FavouritesContext.Provider value={{ favourites, addFavourite, removeFavourite, isFavourite }}>{children}</FavouritesContext.Provider>
}
export const useFavourites = () => useContext(FavouritesContext);
export default FavouritesProvider;