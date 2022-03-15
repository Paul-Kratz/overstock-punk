import React from 'react';
import { IBeer } from '../models/IBeer';
import styles from './beerCard.module.css';
import { useFavourites } from './FavouritesProvider';

type FavouriteIconProps = {
    beer: IBeer
}

export const FavouriteIcon = ({ beer }: FavouriteIconProps) => {
    const { isFavourite, removeFavourite, addFavourite } = useFavourites();

    const handleFavouriteClick = () => {
        if (isFavourite(beer.id)) {
            removeFavourite(beer.id)
        } else {
            addFavourite(beer)
        }
    }
    return (
        <i
            onClick={handleFavouriteClick}
            className={`fa fa-star${isFavourite(beer.id) ? '' : '-o'} 
            ${styles.favouriteIcon}`}
        />

    )
}