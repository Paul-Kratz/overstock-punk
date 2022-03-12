import React from 'react';
import { useParams } from 'react-router-dom';

type Props = {}

const BeerDetails = (props: Props) => {
    const { id } = useParams();
    return (
        <div>Beer for id: {id}</div>
    )
}

export default BeerDetails