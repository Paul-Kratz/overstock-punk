import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FavouriteBeersList } from './favouriteBeersList'
import GithubIcon from './githubIcon'
type LayoutProps = {
    children: React.ReactElement
}

const Layout = ({ children }: LayoutProps) => {
    const [sidebarOpen, toggleSidebar] = useState(true);
    return (
        <div>
            <div className="d-flex justify-content-between align-items-center w-100 p-3 sticky-top" style={{ height: 75, backgroundColor: '#EC5766' }}>
                <button type="button" className="btn btn-light" onClick={() => toggleSidebar(!sidebarOpen)}><i className={`${sidebarOpen ? "fa fa-close" : "fa fa-bars"} menu-bars `} /></button>
                <Link to="/" className='text-decoration-none'> <h1 className="text-white m-0 p-0">PUNK IPA</h1></Link>
                <a href="https://github.com/Paul-Kratz/overstock-punk" target="_blank" rel="noreferrer">
                    <GithubIcon />
                </a>
            </div>
            <div className={`${sidebarOpen ? 'sidebar open' : 'sidebar'} shadow`}>
                <div className="sticky-top p-3 h-100" style={{ top: 75 }}>
                    <FavouriteBeersList />
                </div>
            </div>
            <main className={sidebarOpen ? 'content open' : 'content'}>
                {children}
            </main>
            {/* <div className="row m-0 h-100" style={{ maxWidth: '100vw' }}>
                <div className="col-lg-3 col-md-12 p-0 col-sm-12">
                    <div className="sticky-top" style={{ top: 75 }}>
                        <div className="d-flex flex-column flex-shrink-0 p-3 pe-0 me-2">
                            <FavouriteBeersList />
                        </div>
                    </div>
                </div>
                <div className="col">
                    {children}
                </div>
            </div> */}
        </div>

    )
}

export default Layout