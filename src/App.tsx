import React, { useEffect } from 'react';
import { getAllBeers, getBeerById } from './api';
import './App.css';

function App() {
  const getData = async () => {
    const beers = await getAllBeers();

    const beer = await getBeerById(1)
    console.log(beers)

    console.log(beer)
  }
  useEffect(() => {
    getData();
  }, [])
  return (
    <div>
      Hello World
    </div>
  );
}

export default App;
