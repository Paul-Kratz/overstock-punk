import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { getAllBeers } from '../api';
import { BeerCard } from '../components/beerCard';
import { IBeer } from '../models/IBeer';

export default function BeerList() {
    const [items, setItems] = useState<IBeer[]>([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const getData = async () => {
        const beers = await getAllBeers({ page });
        if (beers.length === 0) setHasMore(false);

        setItems(items.concat(beers));
        setPage(page + 1)
    }
    useEffect(() => {
        getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <InfiniteScroll
            dataLength={items.length}
            next={getData}
            hasMore={hasMore}
            style={{ overflow: 'none' }}
            loader={
                (<div className="w-100 text-center mt-3">
                    <i className="fa fa-spinner fa-spin" style={{
                        fontSize: '2em', textAlign: 'center'
                    }} />
                </div>)}
            endMessage={
                (<p style={{ textAlign: "center" }}>
                    <b>Never drink & drive</b>
                </p>)
            }
        >
            <div className="container">
                <div className="row d-flex align-items-stretch">
                    {items.map((i) => (
                        <div key={`beer-${i.id}`} className="col-xs-12 col-sm-6 col-md-6 col-lg-4 mt-2 d-flex align-items-stretch justify-content-center" >
                            <BeerCard beer={i} />
                        </div>
                    ))}
                </div>
            </div>
        </InfiniteScroll>
    )
}