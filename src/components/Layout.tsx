import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/layout.module.css';
import { FavouriteBeersList } from './favouriteBeersList';
import { useFavourites } from './FavouritesProvider';
import GithubIcon from './githubIcon';
type LayoutProps = {
    children: React.ReactElement
}

const Layout = ({ children }: LayoutProps) => {
    const [sidebarOpen, toggleSidebar] = useState(true);
    const { favourites } = useFavourites();

    useEffect(() => {
        if (!sidebarOpen) {
            toggleSidebar(true);
            setTimeout(() => { toggleSidebar(false); }, 1500)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [favourites])
    return (
        <div>
            <div className="sticky-top" id={styles.navbar}>
                <div title="Favourite Beers" className={`btn btn-light ${styles.cursor}`}
                    onClick={() => toggleSidebar(!sidebarOpen)}>
                    <i className={`${sidebarOpen ? "fa fa-close" : "fa fa-bars"} ${styles.bars}`} />
                </div>
                <Link to="/" className='text-decoration-none'> <h1 className="text-white m-0 p-0">PUNK IPA</h1></Link>
                <a href="https://github.com/Paul-Kratz/overstock-punk" target="_blank" rel="noreferrer">
                    <GithubIcon />
                </a>
            </div>
            <div className={`${styles.sidebar} ${sidebarOpen ? styles.open : ''} shadow`}>
                <div className="sticky-top p-3 h-100" id={styles.offset}>
                    <FavouriteBeersList />
                </div>
            </div>
            <main>
                {children}
            </main>
        </div>

    )
}

export default Layout