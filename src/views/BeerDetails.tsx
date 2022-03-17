import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getBeerById } from '../api';
import { FavouriteButton } from '../components/favouriteButton';
import { LoadingSpinner } from '../components/loadingSpinner';
import { IBeer } from '../models/IBeer';
import { DetailBox } from './../components/detailBox';

const BeerDetails = () => {
    const { id } = useParams();

    const [data, setData] = useState({} as IBeer)
    const [error, setError] = useState<any>();
    const [loading, setLoading] = useState<boolean>(true);
    useEffect(() => {
        const getData = async () => {
            try {
                if (id) {
                    const beer = await getBeerById(+id);
                    setData(beer)
                }
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        getData()
    }, [id])


    if (error) {
        return (
            <div className="alert alert-danger mt-3" role="alert">
                {error?.message}
            </div>)
    }

    if (loading) {
        return <LoadingSpinner />
    }
    return (
        <div className="container mt-4">
            <Link to="/" className="d-inline-block mb-4 text-decoration-none text-secondary" style={{ margin: '0 auto', fontSize: '1em' }}>
                <i className="fa fa-arrow-left me-2" /> Go Back
            </Link>
            <div className="card shadow-sm border-0">
                <div className="card-body d-md-flex justify-content-stretch d-block">
                    <div className="d-flex justify-content-center align-items-center m-5">
                        <img src={data.image_url} alt={`${data.name} bottle`} height={600} />
                    </div>
                    <div className="ms-5">
                        <h1>{data.name}</h1>
                        <h5 className="text-secondary mb-3">{data.tagline}</h5>
                        <FavouriteButton beer={data} />
                        <h5 className="mt-3">Description: </h5>
                        <p>{data.description}</p>
                        <p>First brewed: <b>{data.first_brewed}</b></p>

                        <h5 className="mt-3">Details: </h5>
                        <div className="grid">
                            <DetailBox label="ABV" value={`${data.abv}%`} />
                            <DetailBox label="PH" value={data.ph} />
                            <DetailBox label="IBU" value={data.ibu} />
                            <DetailBox label="SRM" value={data.srm} />
                        </div>

                        <h5 className="mt-3">Food Pairing: </h5>
                        <ul className="list-group list-group-flush">
                            {data.food_pairing?.map((food, i) => (<li key={food + i} className="list-group-item">{food}</li>))}
                        </ul>

                        <h5 className="mt-3">Tips: </h5>
                        <p>{data.brewers_tips}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BeerDetails