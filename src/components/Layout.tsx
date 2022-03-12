import React from 'react'
import { Link } from 'react-router-dom'
import GithubIcon from './githubIcon'

type LayoutProps = {
    children: React.ReactElement
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div>
            <div className="d-flex justify-content-between align-items-center w-100 p-3 ps-5" style={{ height: 75, backgroundColor: '#EC5766' }}>
                <Link to="/" className='text-decoration-none'> <h1 className="text-white m-0 p-0">PUNK IPA</h1></Link>
                <a href="https://github.com/Paul-Kratz/overstock-punk" target="_blank">
                    <GithubIcon />
                </a>
            </div>
            <div className="row m-0 h-100" style={{ maxWidth: '100vw' }}>
                <div className="col-md-2 p-0 col-sm-12">
                    <div className="d-flex flex-column flex-shrink-0 p-3 me-2">
                        Favourite Beers
                    </div>
                </div>
                <div className="col">
                    {children}
                </div>
            </div>
        </div>

    )
}

export default Layout