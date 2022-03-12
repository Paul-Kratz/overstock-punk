import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link } from 'react-router-dom';
import { getAllBeers } from '../../api';
import { IBeer } from '../../models/IBeer';

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
            loader={<h4>Brewing another batch...</h4>}
            endMessage={
                <p style={{ textAlign: "center" }}>
                    <b>Never drink & drive</b>
                </p>
            }
        >

            {items.map((i, index) => (
                <Link to={`beers/${i.id}`} className="text-decoration-none">
                    <div className="card card-body" key={index}>
                        {/* <img src={i.image_url} alt={i.name} height={50} /> */}
                        {i.name}
                    </div>
                </Link>

            ))}
        </InfiniteScroll>
    )
}