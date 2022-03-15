import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getBeerById } from '../api';
import { IBeer } from '../models/IBeer';

type Props = {}

const BeerDetails = (props: Props) => {
    const { id } = useParams();
    const [data, setData] = useState({} as IBeer)

    const getData = async () => {
        if (id) {
            const beer = await getBeerById(+id);
            setData(beer)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className="container mt-4">
            <Link to="/" className="d-inline-block mb-4 text-decoration-none text-secondary" style={{ margin: '0 auto', fontSize: '1.2em' }}>
                <i className="fa fa-arrow-left me-2" /> Go Back
            </Link>
            <div className="card shadow-sm border-0">
                <div className="card-body d-flex justify-content-stretch">
                    <img src={data.image_url} height={500} />

                    <div className="ms-5">
                        <h1>{data.name}</h1>
                        <h3 className="text-secondary">{data.tagline}</h3>


                        <h5 className="mt-3">Description: </h5>
                        <p>{data.description}</p>
                        <p>First brewed: <b>{data.first_brewed}</b></p>

                        <h5 className="mt-3">Details: </h5>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr' }}>
                            <span className="detailBox shadow m-1">
                                {data.abv} %
                                <br />
                                <small className="text-secondary ">ABV</small>
                            </span>
                            <span className="detailBox shadow m-1">
                                {data.ph}
                                <br />
                                <small className="text-secondary">PH</small>
                            </span>
                            <span className="detailBox shadow m-1">
                                {data.ibu}
                                <br />
                                <small className="text-secondary">IBU</small>
                            </span>
                            <span className="detailBox shadow m-1">
                                {data.srm}
                                <br />
                                <small className="text-secondary">SRM</small>
                            </span>
                        </div>

                        <h5 className="mt-3">Food Pairing: </h5>
                        <ul className="list-group list-group-flush">
                            {data.food_pairing?.map(food => (<li className="list-group-item">{food}</li>))}
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