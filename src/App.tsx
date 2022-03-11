import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { getAllBeers } from './api';
import './App.css';
import { IBeer } from './models/IBeer';
const style = {
  height: 30,
  border: "1px solid green",
  margin: 6,
  padding: 8
};

function App() {
  const [items, setItems] = useState<IBeer[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const getData = async () => {
    const beers = await getAllBeers({ page });

    if (beers.length === 0) {
      setHasMore(false);
    }
    setItems(items.concat(beers));
    setPage(page + 1)
  }
  useEffect(() => {
    getData();
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
        <div style={style} key={index}>
          <img src={i.image_url} alt={`Image of ${i.name}`} height={50} />
          {i.name}
        </div>
      ))}
    </InfiniteScroll>
  );
}

export default App;
