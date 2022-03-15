import React from 'react'
import { Link } from 'react-router-dom'
import { IBeer } from '../models/IBeer'
import { useFavourites } from './FavouritesProvider'


export const FavouriteBeersList = () => {
    const { favourites, removeFavourite } = useFavourites();

    const renderFavouriteCard = (beer: IBeer) => (
        <div key={`favourite-${beer.id}`} className="card shadow-sm mb-2 border-0">
            <div className="card-body d-flex justify-content-between align-items-center">
                <Link to={`beers/${beer.id}`} className="text-decoration-none text-black me-1 d-flex align-items-center">

                    <img src={beer.image_url} height={40} className="me-3" />
                    <div>
                        {beer.name}
                        <br />
                        <small className="text-secondary" >{beer.tagline}</small>
                    </div>
                </Link>
                <i className="fa fa-trash-o text-danger cursor-pointer" style={{ cursor: 'pointer', fontSize: '1.2em' }} onClick={() => removeFavourite(beer.id)} />
            </div>
        </div>
    )
    return (
        <>
            <div className="display-5" style={{ fontSize: '1.2em' }}>Your Favourite Beers</div>

            <hr />
            {favourites.length > 0 ? favourites.map(b => renderFavouriteCard(b)) :
                <div className="display-5 text-secondary" style={{ fontSize: '1em' }}>You haven't added any favourites yet</div>
            }

        </>


    )
}