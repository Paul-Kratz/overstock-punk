import React from 'react';
import { IBeer } from '../models/IBeer';
import styles from '../styles/beerDetails.module.css';
import { useFavourites } from './FavouritesProvider';

type FavouriteButtonProps = {
    beer: IBeer
}

export const FavouriteButton = ({ beer }: FavouriteButtonProps) => {
    const { isFavourite, addFavourite, removeFavourite } = useFavourites();

    if (isFavourite(beer.id)) {
        return (
            <button
                onClick={() => removeFavourite(beer.id)}
                className={`btn btn-sm ${styles.btnColour}`}>
                Remove favourite
            </button>)
    }
    return (
        <button
            onClick={() => addFavourite(beer)}
            className={`btn btn-sm ${styles.btnOutlineColour}`}>
            Add favourite
        </button>
    )
}