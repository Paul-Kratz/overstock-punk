import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { getAllBeers } from '../api';
import { BeerCard } from '../components/beerCard';
import { LoadingSpinner } from '../components/loadingSpinner';
import { IBeer } from '../models/IBeer';

export default function BeerList() {
    const [items, setItems] = useState<IBeer[]>([]);
    const [error, setError] = useState<any>();
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const getData = async () => {
        try {
            const beers = await getAllBeers(page);
            if (beers.length === 0) setHasMore(false);

            setItems(items.concat(beers));
            setPage(page + 1)
        } catch (e) {
            setError(e);
        }
    }
    useEffect(() => {
        getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div className="container">
            {error && <div className="alert alert-danger mt-3" role="alert">
                {error?.message}
            </div>}
            <InfiniteScroll
                dataLength={items.length}
                next={getData}
                hasMore={hasMore}
                style={{ overflow: 'none' }}
                loader={<LoadingSpinner />}
                endMessage={
                    (<p className="mt-2 text-center">
                        <b>There are no more beers, you drank them all!</b>
                    </p>)}>

                <div className="row d-flex align-items-stretch">
                    {items.map((i) => (
                        <div key={`beer-${i.id}`}
                            className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 mt-2 d-flex align-items-stretch justify-content-center" >
                            <BeerCard beer={i} />
                        </div>
                    ))}
                </div>
            </InfiniteScroll>
        </div>
    )
}