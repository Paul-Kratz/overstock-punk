import React from 'react'
import { IBeer } from '../models/IBeer'
import { useFavourites } from './FavouritesProvider'

type FavouriteButtonProps = {
    beer: IBeer
}

export const FavouriteButton = ({ beer }: FavouriteButtonProps) => {
    const { isFavourite, addFavourite, removeFavourite } = useFavourites();

    if (isFavourite(beer.id)) {
        return (
            <button
                onClick={() => removeFavourite(beer.id)}
                className="btn btn-sm btn-colour">
                Remove favourite
            </button>)
    }
    return (
        <button
            onClick={() => addFavourite(beer)}
            className="btn btn-sm btn-outline-colour">
            Add favourite
        </button>
    )
}