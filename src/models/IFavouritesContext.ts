import { IBeer } from "./IBeer";

export interface IFavouritesContext {
    favourites: IBeer[];
    addFavourite: (arg0: IBeer) => void;
    removeFavourite: (arg0: number) => void;
    isFavourite: (arg0: number) => boolean;
}