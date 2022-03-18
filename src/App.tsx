import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import FavouritesProvider from './components/FavouritesProvider';
import Layout from './components/layout';
import { LoadingSpinner } from './components/loadingSpinner';
const BeerList = React.lazy(() => import('./views/BeerList'));
const BeerDetails = React.lazy(() => import('./views/BeerDetails'));
function App() {
  return (
    <BrowserRouter>
      <FavouritesProvider>
        <Layout>
          <React.Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<BeerList />} />
              <Route path="beers/:id" element={<BeerDetails />} />
            </Routes>
          </React.Suspense>
        </Layout>
      </FavouritesProvider>
    </BrowserRouter>
  )
}
export default App;
