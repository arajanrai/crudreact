import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function BasicHeader() {
    const location = useLocation();
    return (
        <div>
            < nav className="navbar navbar-expand-lg navbar-light bg-light" >
                <Link to="/" className="navbar-brand">CRUD React</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className={location.pathname !== '/details' ? 'nav-item active' : 'nav-item'}>
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className={location.pathname === '/details' ? 'nav-item active' : 'nav-item'}>
                            <Link to="/details" className="nav-link">View Data</Link>
                        </li>
                    </ul>
                    {location.pathname === '/details' ?
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Not Active ATM" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0">Search</button>
                        </form>
                        : <span></span>}
                </div>
            </nav>
        </div >
    );
}

export default BasicHeader;
