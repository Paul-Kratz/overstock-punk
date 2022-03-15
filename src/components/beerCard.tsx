import 'font-awesome/css/font-awesome.min.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { IBeer } from '../models/IBeer';
import styles from './beerCard.module.css';
import { FavouriteIcon } from './favouriteIcon';
type BeerCardProps = {
    beer: IBeer
}

export const BeerCard = ({ beer }: BeerCardProps) => {
    return (
        <div className={`card shadow-sm ${styles.beerCard}`}>
            <FavouriteIcon beer={beer} />
            <Link to={`beers/${beer.id}`} className="text-decoration-none text-black h-100">
                <div title={beer.name} className={`card-body ${styles.cardBody}`}>
                    <img src={beer.image_url} alt={`${beer.name} bottle`} />

                    <div className="d-flex flex-column align-items-center text-center">
                        <div className={styles.beerName}>{beer.name}</div>
                        <small className="text-secondary">{beer.tagline} </small>
                        <small className="text-secondary">ABV: <span className={styles.abv}>{beer.abv}%</span></small>
                    </div>
                </div>
            </Link>
        </div>
    )
}